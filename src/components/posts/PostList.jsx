import React, { Component } from 'react';
import PostItems from './PostItems';
import Pagination from './Pagination';
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPage: 1,
      postsPerPage: 4,
      isloading: true,
      errMsg: ''
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.setState({ isloading: false });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (response.status === 200) return response.json();
        else this.setState({ errMsg: 'Error - ' + res.status });
      })
      .then(data => this.setState({ posts: data }))
      .catch(err => this.setState({ errMsg: err.message }));
  };

  paginate = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { posts, currentPage, postsPerPage, isloading } = this.state;
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

    return (
      <div className="pb-3 posts-content">
        <div className="post-lists mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <PostItems posts={currentPosts} isloading={isloading} />
                <Pagination
                  posts={posts}
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  paginate={this.paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
