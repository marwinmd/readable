import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import {fetchAllCategories} from "../utils/api";
import {LOAD_ALL_CATEGORIES} from "../actions/index";
import {connect} from 'react-redux';
import {loadAllCategories} from '../actions';
import {Tab, Tabs} from 'react-bootstrap';
import AllPostsCategory from "./AllPostsCategory";
import {categoryReducer} from '../reducers'
import Categorie from "./Categorie";


class Categories extends Component {
    static propTypes = {}

    constructor(props) {
        super(props);
        fetchAllCategories().then((data) => {
            var obj = {type: LOAD_ALL_CATEGORIES, categories: data}
            this.props.getCategories(obj);
        });
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={0}>
                    <Tab eventKey={0} title="All" key={0}><AllPostsCategory/></Tab>
                    {this.props.categories.map((categorie, index) => (
                        <Tab eventKey={index + 1} title={categorie.name} key={index + 1}>
                            <Categorie category={categorie}/></Tab>))}
                </Tabs>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: (data) => dispatch(loadAllCategories(data)),
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryReducer.categories
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);