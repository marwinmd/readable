import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import Categorie from "./Categorie";
//import '../App.css';
import {Nav, NavItem, Tab, Tabs} from 'react-bootstrap';
import Posts from "./Posts";

class Categories extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={1} >
                    <Tab title="All" eventKey={1}><Posts posts={this.props.posts}/></Tab>
                    {this.props.categories.map((categorie) => (
                        <Tab eventKey={categorie.path} title={categorie.name}><Categorie key={categorie.path} name={categorie.name}/></Tab>))}
                </Tabs>


                {/*<Nav bsStyle="pills" stacked activeKey={this.props.categories[0]}>*/}
                    {/*{this.props.categories.map((categorie) => (*/}
                        {/*<NavItem><Categorie key={categorie.path} name={categorie.name}/></NavItem>))}*/}
                {/*</Nav>*/}
            </div>
        )
    }
}

export default Categories;
