/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errMsg: ""
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ errMsg: error }));
  };

  postItems() {
    const { posts } = this.state;
    console.log(posts);
    return posts.map(post => {
      return (
        <div className="post-lists mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card w-100">
                  <div className="card-body">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pb-3 posts-content">
        {!this.state.posts.length ? <div>Loading...</div> : this.postItems()}
      </div>
    );
  }
}

export default PostList;
