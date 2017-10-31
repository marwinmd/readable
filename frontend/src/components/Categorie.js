import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import '../App.css';
import {Label} from "react-bootstrap"

class Categorie extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h2><Label> {this.props.name}</Label></h2>
            </div>
        )
    }
}

export default Categorie;
