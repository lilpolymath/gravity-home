import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { ReactComponent as Arrow } from '../../assets/Vector.svg';
import styles from './style.module.css';
import testimonial from './testimonial.json';

const Testimonial = () => {
  const [[index, dir], setIndex] = useState([0, 0]);

  const testimonials = useTransition(testimonial[index], item => item.key, {
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
    config: config.gentle,
  });

  const control = key => {
    setIndex(prevState => [
      key % testimonial.length,
      prevState[1] > key ? 1 : -1,
    ]);
  };

  return (
    <section className={styles.main}>
      <div className={styles.section_tag}>- Testimonial</div>
      {testimonials.map(({ item, props, key }) => (
        <animated.div key={key} className={styles.content} style={{ ...props }}>
          <div className={styles.testimonial_content}>
            <div className={styles.testimonial}>"{item.quote}"</div>
            <div className={styles.details}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.title}</p>
            </div>
            <div className={styles.buttons}>
              <button onClick={() => control(item.key)} className={styles.prev}>
                <Arrow />
              </button>
              <button onClick={() => control(item.key)} className={styles.next}>
                <Arrow />
              </button>
            </div>
          </div>
          <div className={styles.test}>
            <img
              alt=''
              src={item.picture}
              className={styles.testimonial_picture}
            />
          </div>
        </animated.div>
      ))}
    </section>
  );
};

export default Testimonial;
