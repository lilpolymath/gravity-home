import React from 'react';
import Google from '../../assets/Google';
import LinkedIn from '../../assets/LinkedIn';
import Twitter from '../../assets/Twitter';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.nav}>
        <div>
          <h2 className={styles.logo}>Gravity</h2>
        </div>
        <nav className={styles.main}>
          <p>Travel</p>
          <p>Explore</p>
          <p>Works</p>
          <p>About</p>
          <p>Contact Us</p>
        </nav>
        <div className={styles.subscribe}>
          <input
            className={styles.subscribe_email}
            type='email'
            placeholder='Your Email'
            id=''
          />
          <button>send</button>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.nav}>
        <nav className={styles.submenu}>
          <p>Terms</p>
          <p>Promo</p>
          <p>Download</p>
          <p>News</p>
        </nav>

        <div>
          <Twitter />
          <LinkedIn />
          <Google />
          <Facebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
