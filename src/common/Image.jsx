import React, { useState } from 'react';

// import styles from './image.module.css';

const Image = ({ style = '', url = '', alt = '' }) => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <img
        src={url}
        alt={alt}
        className={style}
        onLoad={() => setLoad(true)}
        hidden={!load}
      />
      <img
        src='https://res.cloudinary.com/favourcodes/image/upload/v1577965905/samples/animals/cat.jpg'
        alt={alt}
        className={style}
        // onLoad={() => setLoad(true)}
        hidden={load}
      />
    </>
  );
};

export default Image;
