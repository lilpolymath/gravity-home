import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';

import Button from '../../common/Button';
import styles from './style.module.css';
import works from './works.json';

const Works = () => {
  const [activeTag, setTag] = useState('all');
  const [key, setKey] = useState(null);

  const [showButton, setShowButton] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const filteredWorks = works.filter(
    work => work.tag.indexOf(activeTag) !== -1
  );

  const tagList = ['all', 'branding', 'web', 'development', 'films'];

  // const hoverHelper = key => {
  //   let defaultArray = [false, false, false, false, false, false];
  //   defaultArray[key - 1]
  //     ? setShowButton(defaultArray)
  //     : (defaultArray[key - 1] = false);
  //   setShowButton(defaultArray);
  // };

  useEffect(() => {
    let defaultArray = [false, false, false, false, false, false];
    defaultArray[key - 1]
      ? setShowButton(defaultArray)
      : (defaultArray[key - 1] = false);
    setShowButton(defaultArray);
  }, [key]);

  return (
    <section className={styles.main}>
      <div className={styles.section_tag}>- Our Works</div>
      <div className={styles.text}>
        <header className={styles.main_header}>Discover Our Work</header>
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
          <div style={{ position: 'relative' }} key={work.key}>
            <Image
              alt='our work gallery'
              cloudName='favourcodes'
              publicId={work.url}
              secure='true'
              loading='lazy'
              className={styles.work}
            ></Image>
            {showButton[work.key - 1] && (
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
        <Button label='Get Started' />
      </div>
    </section>
  );
};

export default Works;
