import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how r u?", likecount: 12 },
    { id: 2, message: "It's my first post", likecount: 10 }
  ];
  let postsElements = postData.map(el => {
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
      {/* <Post />
        <Post /> */}
    </div>
  );
};

export default MyPosts;
