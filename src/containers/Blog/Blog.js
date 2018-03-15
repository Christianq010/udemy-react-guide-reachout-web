import React, { Component } from 'react';
// import axios from 'axios';
// Use instance of axios instead of global axios config
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    // return json response, async requests
    componentDidMount () {
        // axios uses promises and returns a JS promise
        axios.get('/posts')
            .then(response => {
                // limit number of blog posts
                const postLimit = response.data.slice(0, 5);
                // Add the Author property to our response (post data)
                const updatedPosts = postLimit.map(post => {
                    return {
                        ...post,
                        author: 'Chris'
                    }
                });
                this.setState({posts: updatedPosts})
                // below to set State to all posts 
                // this.setState({posts: response.posts})
                // console.log(response);
            })
            .catch(error => {
                this.setState({error: true});
                // console.log('There was an error - ', error);
            })
    }
    // when a specific blog post is clicked, update the home page main content
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        // render error only when error happens
        let posts = <p className="error">Something went wrong</p>;
        if (!this.state.error) {
            // call our posts and map them into a posts variable and then output our <Post /> element
            posts = this.state.posts.map (post => {
                return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;