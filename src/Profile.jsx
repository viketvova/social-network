import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
  return (
    <div className={p.content}>
      <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div>
        ava + description
      </div>
      <div className={p.posts}>
        My Posts
        <div className={p.item}>
          New Post
        </div>
        <div className={p.item}>
          Post1
        </div>
        <div>
          Post2
        </div>
      </div>
    </div>

  );
}


export default Profile;