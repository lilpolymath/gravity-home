import React from 'react';
import styles from './hamburger.module.css';

const Hamburger = ({ toggleMenu, open = false, dark }) => {
  const none = styles.hamburger_icon + ' ' + styles.none;

  console.log(open);
  return (
    <div onClick={toggleMenu} className={styles.hamburger}>
      <div className={open ? none : styles.hamburger_icon}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
