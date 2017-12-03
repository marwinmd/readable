import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import Post from './Post';
import {Col, Grid, Row} from 'react-bootstrap'
import {LOAD_ALL_POSTS, loadAllPosts} from "../actions/index";
import {fetchAllPosts} from "../utils/api";
import {connect} from 'react-redux';

class AllPostsCategory extends Component {
    static propTypes = {}

    constructor(props) {
        super(props);
        fetchAllPosts().then((data) => {
            var obj = {type: LOAD_ALL_POSTS, posts: data}
            this.props.getAllPosts(obj);
        });
    }

    render() {
        return (
            <div>
                <Grid>
                    {this.props.posts.map((postItem, index) => (
                        <Row className="show-grid" key={index}><Col md={10}><Post post={postItem}/></Col></Row>))}
                    <Post/>
                </Grid>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPosts: (data) => dispatch(loadAllPosts(data)),
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPostsCategory);

