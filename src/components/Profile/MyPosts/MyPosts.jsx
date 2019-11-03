import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    
      <div className={p.posts}>
        My Posts
        <Post message="Hi, how r u?" likecount="10" />
        <Post message="It's my first post" likecount="15" />
        {/* <Post />
        <Post /> */}
      </div>
   

  );
}


export default MyPosts;