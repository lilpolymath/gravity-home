import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { ReactComponent as Arrow } from '../../assets/Vector.svg';
import styles from './style.module.css';
import testimonial from './testimonial.json';

const Testimonial = () => {
  const [[index, dir], setIndex] = useState([0, 0]);

  const testimonials = useTransition(testimonial[index], item => item.index, {
    from: {
      opacity: 0,
      transform: `translateX(${dir === 1 ? 100 : -100}px)`,
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: `translateX(${dir === 1 ? -100 : 100}px)`,
    },
    config: config.molasses,
  });

  console.log(testimonial);
  return (
    <section className={styles.main}>
      <div className={styles.section_tag}>- Testimonial</div>
      <div className={styles.content}>
        <div className={styles.testimonial_content}>
          <div className={styles.testimonial}>
            "Professionals in their craft! All products were super great with
            strong attention to details, and overall vibe"
          </div>
          <div className={styles.details}>
            <p className={styles.name}>Polina Kuzina</p>
            <p className={styles.role}>Manager at CraftWork</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.prev}>
              <Arrow />
            </button>
            <button className={styles.next}>
              <Arrow />
            </button>
          </div>
        </div>
        <div className={styles.test}>
          <animated.div
            alt=''
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/favourcodes/image/upload/v1595900383/Gravity/Placeholder_12_ulj5aw.png)',
            }}
            className={styles.testimonial_picture}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
