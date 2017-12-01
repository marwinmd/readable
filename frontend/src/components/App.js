import React, {Component} from 'react';
import '../App.css';
import {Grid, PageHeader, Row} from "react-bootstrap"
import {connect} from 'react-redux';
import {loadAllCategories} from '../actions';
import Categories from './Categories';
import {fetchAllCategories} from "../utils/api";
import {LOAD_POSTS_FOR_CATEGORY} from "../actions/index";


class App extends Component {

    componentDidMount() {
        fetchAllCategories().then((data) => {
            var obj = {type: LOAD_POSTS_FOR_CATEGORY, categories: data}
            this.props.getCategories(obj);
        });
    }


    render() {
        return (
            <div className="Grid">
                <Grid>
                    <Row><PageHeader className={"text-center"}>Online Learning - Your place to start learning!
                        <p className={"text-center"}>
                            <small>Choose a topic you are interested in.</small>
                        </p>
                    </PageHeader><Row/>
                    </Row>
                    <Categories categories={this.props.categories} posts={this.props.categories.posts}/>
                </Grid>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getCategories: (data) => dispatch(loadAllCategories(data))
    }
}

function mapStateToProps(state) {
    return {
        categories: state.category,
        posts: state.posts
    };

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
