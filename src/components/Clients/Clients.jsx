import React from 'react';

import { ReactComponent as Nike } from '../../assets/nike.svg';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Tinder } from '../../assets/tinder.svg';
import { ReactComponent as Xiaomi } from '../../assets/xiaomi.svg';
import { ReactComponent as AMD } from '../../assets/amd.svg';

import styles from './style.module.css';

const Clients = () => {
  return (
    <section className={styles.main}>
      <div className={styles.clients}>
        <div>
          <header className={styles.clients_header}>Our Clients</header>
        </div>
        <div className={styles.clients_content}>
          <h3 className={styles.section_tag}>- We worked with</h3>
          <p>
            Our favorite brands are our friends! We help them to achieve their
            goals, they help us to stay sharp.
          </p>
        </div>
      </div>
      <div className={styles.clients_logos}>
        <Xiaomi />
        <Tinder />
        <Apple />
        <Nike />
        <AMD />
      </div>
    </section>
  );
};

export default Clients;
