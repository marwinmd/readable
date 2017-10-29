import React, {Component} from "react";
import {PropTypes} from 'prop-types';

class Categories extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h1>Choose a Category you are interested in:</h1>
                <ul>
                    {this.props.categories.map((categorie) => (<li key={categorie.path}>{categorie.name}</li>))}
                </ul>
            </div>
        )
    }
}

export default Categories;
