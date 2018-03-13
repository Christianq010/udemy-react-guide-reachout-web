import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        // show full post only when ID exists - (via click)
        if (this.props.id)
        post = (
            <div className="FullPost">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;