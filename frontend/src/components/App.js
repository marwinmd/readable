import React, {Component} from 'react';
import '../App.css';
import {fetchAllCategories, fetchAllPosts} from "../utils/api";
import Categories from "./Categories"
import Posts from "./Posts"

class App extends Component {

    state = {
        categories: [],
        posts: []
    }


    componentDidMount() {
        fetchAllCategories().then((categories) => this.setState(() => ({
            categories
        })))

        fetchAllPosts().then((posts) => this.setState(() => ({
            posts
        })))
    }

    render() {
        return (
            <div className="App">
                <Categories categories={this.state.categories}/>
                <Posts posts={this.state.posts}/>
            </div>
        );
    }
}

export default App;
