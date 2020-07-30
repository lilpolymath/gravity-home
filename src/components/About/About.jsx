import React from 'react';
import { Image, Placeholder } from 'cloudinary-react';

import styles from './style.module.css';

const HeroSub = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_picture}>
        <figure className={styles.figure}>
          <Image
            cloudName='favourcodes'
            publicId='Gravity/Placeholder_2_kjr6ag.png'
            secure='true'
            loading='lazy'
            className={styles.image}
            dpr='auto'
            responsive
            width='auto'
            crop='scale'
            responsiveUseBreakpoints='true'
          >
            <Placeholder type='vectorize'></Placeholder>
          </Image>
        </figure>
      </div>
      <div className={styles.main_content}>
        <header>
          <h2 className={styles.main_text}>
            We solve digital problems with an outstanding creative flare
          </h2>
        </header>
        <p className={styles.desc}>
          The best time to view the moon, obviously, is at night when there are
          few clouds and the weather is accommodating for a long and lasting
          study.
        </p>
        <p className={styles.desc}>
          For most of us, the idea of astronomy is something we directly connect
          to “stargazing”, telescopes and seeing magnificent displays in the
          heavens.
        </p>
        <div className={styles.testimonial}>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1595903107/Gravity/Ellipse_n3zeoa.png'
            alt=''
          />
          <div className={styles.testimonial_credit}>
            <p className={styles.name}>Denis Shepovalov</p>
            <p className={styles.title}>Co-Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
