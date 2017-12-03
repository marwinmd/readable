import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import '../App.css';
import {Label} from "react-bootstrap"
import Posts from "./Posts";

class Categorie extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Posts category={this.props.category}/>
            </div>
        )
    }
}
export default Categorie;
