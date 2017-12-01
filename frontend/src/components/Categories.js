import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import Categorie from "./Categorie";
//import '../App.css';
import {Tab, Tabs} from 'react-bootstrap';
import Posts from "./Posts";

class Categories extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={0}>
                    {this.props.categories.categories.map((categorie, index) => (
                        <Tab eventKey={index} title={categorie.name} key={index}>
                            <Categorie key={categorie.path} name={categorie.name}/></Tab>))}
                </Tabs>
            </div>
        )
    }
}

export default Categories;
