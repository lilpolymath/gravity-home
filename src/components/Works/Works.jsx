import React, { useState } from 'react';
// import { Image, Placeholder } from 'cloudinary-react';

import Button from '../../common/Button';
import styles from './style.module.css';
import works from './works.json';
import Image from '../../common/Image';

// TODO
// Set onHover trigger display

const Works = () => {
  const [activeTag, setTag] = useState('all');

  const filteredWorks = works.filter(
    work => work.tag.indexOf(activeTag) !== -1
  );

  const tagList = ['all', 'branding', 'web', 'development', 'films'];

  return (
    <section className={styles.main}>
      <header>
        <h3 className={styles.section_tag}>- Our Works</h3>
      </header>
      <div className={styles.text}>
        <header>
          <h2 className={styles.main_header}>Discover Our Work</h2>
        </header>
        <div className={styles.tag_list}>
          {tagList.map((tag, index) => (
            <button
              key={index}
              onClick={() => setTag(tag)}
              style={{ color: activeTag === tag ? 'rgb(20, 52, 225)' : null }}
              className={styles.tag_item}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <section className={styles.work_gallery}>
        {filteredWorks.map(work => (
          <div key={work.key}>
            <Image
              style={styles.work}
              url={`https://res.cloudinary.com/favourcodes/image/upload/v1/${work.url}`}
              alt=''
            />

            {/* <Image
              alt='our work gallery'
              cloudName='favourcodes'
              publicId={work.url}
              secure='true'
              loading='lazy'
              className={styles.work}
            >
              <Placeholder type='vectorize'></Placeholder>
            </Image> */}
            {false && (
              <div className={styles.play}>
                <div className={styles.play_button}></div>
              </div>
            )}
          </div>
        ))}
      </section>
      <div className={styles.section_tagline}>
        <p className={styles.tagline}>
          It picks up the words on the page and displays ads that are similar to
          those words. Then when someone either performs an action or clicks on
          your page you will get paid.
        </p>
        <Button label='See our works' />
      </div>
    </section>
  );
};

export default Works;
