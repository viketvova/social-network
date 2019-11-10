import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
        <div>
      <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>

      </div>
  );
}


export default ProfileInfo;