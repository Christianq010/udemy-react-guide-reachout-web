import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    // GET our individual blog posts
    componentDidUpdate () {
        if (this.props.id) {
            // check if id exists,
            // check if we have no loaded posts
            // prevent re-rendering of the same component by checking if id is same as post.id
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                        // console.log(response);
                    });
            }
        }
    }
    render () {
        let post = <p>Please select a Post!</p>;
        // don't reload fullpost before individual post GET request made, 
        // conduct check and say loading if loading
        if (this.props.id) {
            post = <p>Loading ...</p>;
        }

        // show full post only when loadedPost is updated
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;