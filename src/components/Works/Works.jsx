import React, { useState } from 'react';
import styles from './style.module.css';
import works from './works.json';

const Works = () => {
  const [activeTag, setTag] = useState('all');

  const filteredWorks = works.filter(
    work => work.tag.indexOf(activeTag) !== -1
  );

  const tagList = ['all', 'branding', 'web', 'development', 'films'];

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
          <div key={work.key}>
            <img
              src={work.url}
              alt='our work gallery'
              className={styles.work}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Works;
