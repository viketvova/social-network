import React from 'react';
import s from './Footer.module.css';

let Footer = () => {
  return (
    <div className={s.footer}>
      Все права защищены 2019.
      <div>
        <a href="#" className={s.new}>Напишите нам</a>
      </div>
    </div>
  );
}


export default Footer;