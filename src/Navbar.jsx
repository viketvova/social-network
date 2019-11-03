import React from 'react';
import s from'./Navbar.module.css';

// Что такое s - это объект:
// let s = {
//   "nav": "",
//   'item': ""
// }

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="Dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a href="News">News</a>
      </div>
      <div className={s.item}>
        <a href="Music">Music</a>
      </div>
      <div className={s.item}>
        <a href="Settings">Settings</a>
      </div>
    </nav>

  );
}

export default Navbar;