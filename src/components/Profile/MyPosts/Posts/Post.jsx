import React from 'react';
import p from './Post.module.css';

const Post = () => {
  return (

    <div className={p.item}>
      <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" />
      Post1
          <div>
        <span>like</span>
      </div>
    </div>
  );
}


export default Post;