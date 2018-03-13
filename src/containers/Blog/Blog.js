import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }
    // return json response, async requests
    componentDidMount () {
        // axios uses promises and returns a JS promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
                // console.log(response);
            });
    }
    render () {
        // call our posts and map them into a posts variable and then output our <Post /> element
        const posts = this.state.posts.map (post => {
            return <Post key={post.id} title={post.title} author={post.userId} />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;