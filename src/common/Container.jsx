import * as React from 'react';

import style from './style.module.css';

export default function Container({ children, as = 'div', styles = '' }) {
  const Component = as;

  const componentStyle = style.container + ' ' + styles;

  return (
    <Component className={componentStyle}>
      <div className={style.wrapper}>{children}</div>
    </Component>
  );
}
