import React from 'react';

import styles from './style.module.css';

const Clients = () => {
  return (
    <section className={styles.main}>
      <div className={styles.clients}>
        <div>Our Clients</div>
        <div>
          <p>We worked with</p>
          <p>
            Our favorite brands are our friends! We help them to achieve their
            goals, they help us to stay sharp.
          </p>
        </div>
      </div>
      <div className={styles.logos}>Logos of Famous clients</div>
    </section>
  );
};

export default Clients;
