import React, {Component} from 'react';
import '../App.css';
import {fetchAllCategories, fetchAllPosts} from "../utils/api";
import Categories from "./Categories"
import {Grid, PageHeader, Row} from "react-bootstrap"

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

            <div className="Grid">
                <Grid>
                    <Row><PageHeader className={"text-center"}>Online Learning - Your place to start learning!
                        <p className={"text-center"}><small>Choose a topic you are interested in.</small></p>
                    </PageHeader><Row/>
                    </Row>
                    {/*TODO: Hier muss das über den globalen State erfolgen*/}
                    <Categories categories={this.state.categories} posts={this.state.posts}/>
                </Grid>
            </div>
        );
    }
}

export default App;
