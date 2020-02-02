import React from 'react';

const PostItems = ({ posts, isloading }) => {
  if (isloading) {
    return <div className="text-center">Loading...</div>;
  } else {
    return posts.map(post => {
      return (
        <div key={post.id} className="card w-100 mb-5">
          <div className="card-body">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  }
};

export default PostItems;
