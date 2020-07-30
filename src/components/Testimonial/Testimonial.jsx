import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { Image } from 'cloudinary-react';
import { ReactComponent as Arrow } from '../../assets/Vector.svg';
import styles from './style.module.css';
import testimonial from './testimonial.json';

const Testimonial = () => {
  const [[index, dir], setIndex] = useState([0, 0]);

  const testimonials = useTransition(testimonial[index], item => item.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: `translateX(${dir === 1 ? 100 : -100}px)`,
    },
    enter: {
      opacity: 1,
      position: 'relative',
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: `translateX(${dir === 1 ? -100 : 100}px)`,
    },
    config: config.gentle,
  });

  const length = testimonial.length;

  const control = key => {
    setIndex(prevState => [
      prevState[0] <= 0 ? length - 1 : (prevState[0] + key) % length,
      key,
    ]);
  };

  return (
    <section id='#testimonial' className={styles.main}>
      <header>
        <h3 className={styles.section_tag}>- Testimonial</h3>
      </header>

      {testimonials.map(({ item, props, key }) => (
        <animated.div key={key} className={styles.content} style={{ ...props }}>
          <div className={styles.testimonial_content}>
            <div className={styles.testimonial}>"{item.quote}"</div>
            <div className={styles.details}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.title}</p>
            </div>
            <div className={styles.buttons}>
              <button onClick={() => control(-1)} className={styles.prev}>
                <Arrow />
              </button>
              <button onClick={() => control(1)} className={styles.next}>
                <Arrow />
              </button>
            </div>
          </div>
          <div className={styles.test}>
            <Image
              alt={item.name}
              cloudName='favourcodes'
              publicId={item.picture}
              secure='true'
              loading='lazy'
              className={styles.testimonial_picture}
            ></Image>
          </div>
        </animated.div>
      ))}
    </section>
  );
};

export default Testimonial;

// function Img ({src, fallback, className }) {
//   const [loaded, setLoaded] = React.useState(false);

//   return (
//   <>
//   <img src={src} className={`${style.img} ${className}`} hidden={loaded} />
//   <img src={fallback} className={className} onload={ () => setLoaded(true)} hidden={!loaded} />
//   </>
//   )
//   }
