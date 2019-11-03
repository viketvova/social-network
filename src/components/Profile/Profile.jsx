import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div>
        ava + description
      </div>
      <MyPosts />
      </div>
  );
}


export default Profile;