import React, {Component} from "react";
import {PropTypes} from 'prop-types';
import {Badge, Button, ButtonGroup, Collapse, Glyphicon, Media, Well} from 'react-bootstrap';

class Post extends Component {
    static propTypes = {}

    state = {
        open: false
    }

    render() {
        return (
            <div>
                <Media>
                    <Media.Left align="top">
                        <p><Glyphicon glyph="glyphicon glyphicon-user"> {this.props.post.author}</Glyphicon></p>
                        <p><Glyphicon glyph="glyphicon glyphicon-star-empty"> <Badge>{this.props.post.voteScore}</Badge></Glyphicon>
                        </p>
                        <div>
                            <ButtonGroup bsSize="xsmall">
                                <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-up"></Glyphicon></Button>
                                <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-down"></Glyphicon></Button>
                            </ButtonGroup>
                        </div>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.props.post.title}</Media.Heading>
                        <p>{this.props.post.body}</p>
                        <p>{this.props.post.timestamp} {this.props.post.commentCount}</p>
                        <Button bsSize="xsmall" onClick={() => this.setState({open: !this.state.open})}>
                            <Glyphicon glyph="glyphicon glyphicon-comment">{this.props.post.commentCount}</Glyphicon>

                        </Button>
                        <Collapse in={this.state.open}>
                            <div>
                                <Well>
                                    Hallo All
                                </Well>
                            </div>
                        </Collapse>
                    </Media.Body>
                </Media>
                <div>
                </div>
            </div>
        )
    }
}

export default Post;
