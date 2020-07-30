import React from 'react';
import { Image } from 'cloudinary-react';

import styles from './style.module.css';
import { ReactComponent as Hundred } from '../../assets/100.svg';
import { ReactComponent as Bag } from '../../assets/Bag.svg';

const Services = () => {
  return (
    <section id='#services' className={styles.main}>
      <div className={styles.section_tag}>- Services</div>
      <section className={styles.content}>
        <header className={styles.main_content}>
          We love work hard and explore new things that’s why we cover lot of
          things. Check our service list and view details
        </header>
        <div className={styles.xp_section}>
          <div>
            <p>Multimedia</p>
            <p>Interactive Design</p>
            <p>Packaging</p>
            <p>Branding</p>
          </div>
          <div>
            <p>Creative Strategy</p>
            <p>UI/UX</p>
            <p>Coding</p>
          </div>
        </div>
      </section>
      <div className={styles.video}>
        <figure>
          <img
            className={styles.image}
            alt='video'
            src='https://res.cloudinary.com/favourcodes/image/upload/v1595900233/Gravity/Placeholder_3_rjxidz.png'
          />
        </figure>
        <div className={styles.play}>
          <div className={styles.play_button}></div>
        </div>
      </div>
      <section className={styles.service_two}>
        <div className={styles.service_image_section}>
          <figure className={styles.service_image}>
            <Image
              cloudName='favourcodes'
              publicId='Gravity/Placeholder_13_ewcyiy.png'
              secure='true'
              loading='lazy'
              className={styles.image}
              alt=''
            ></Image>
          </figure>
          <figure className={styles.service_image_main}>
            <Image
              cloudName='favourcodes'
              publicId='Gravity/Placeholder_5_e7wi25.png'
              secure='true'
              loading='lazy'
              className={styles.image}
              alt=''
            ></Image>
          </figure>
        </div>
        <div className={styles.service_content}>
          <header className={styles.main_text}>
            Well thought with super easy to use interface
          </header>
          <p className={styles.desc}>
            As we approached the palace I could see through the great windows of
            the first floor the brilliantly illuminated audience chamber of Than
            Kosis. The immense hall was crowded with nobles and their women.
          </p>
          <div className={styles.kpi}>
            <div className={styles.kpi_list_item}>
              <Hundred /> Ultimate Result
            </div>
            <div className={styles.kpi_list_item}>
              <Bag /> Minimal Design
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
