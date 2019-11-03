import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    
      <div className={p.posts}>
        My Posts
       
        <Post />
        <Post />
       
      </div>
   

  );
}


export default MyPosts;