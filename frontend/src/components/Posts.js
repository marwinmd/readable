import React, {Component} from "react";
import {PropTypes} from 'prop-types';

class Posts extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {this.props.posts.map((posts) => (<li key={posts.id}>{posts.title}</li>))}
                </ul>
            </div>
        )
    }
}

export default Posts;
