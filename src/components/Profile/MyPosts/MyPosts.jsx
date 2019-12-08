import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = props => {
  let postsElements = props.postData.map(el => {
    return <Post message={el.message} likecount={el.likecount} />;
  });
  return (
    <div className={p.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={p.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
