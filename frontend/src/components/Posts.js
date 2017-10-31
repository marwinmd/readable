import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import Post from './Post';
import {Col, Grid, Row} from 'react-bootstrap'

class Posts extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Grid>
                    {this.props.posts.map((postItem) => (
                        <Row className="show-grid"><Col md={10}><Post post={postItem}/></Col></Row>))}
                </Grid>
            </div>
        )
    }
}

export default Posts;