import React from 'react';

import { ScrollableLayout } from '../../Common/ScrollableLayout';

import style from './AppLayout.module.css';

/**
 * Layout of application.
 * @param {JSX.Element} children Main content of application.
 * @param {JSX.Element} aside    Aside content of application.
 */
export default ({ children, aside }) => (
  <div className={style.root}>
    <div className={style.main}>
      <ScrollableLayout>
        {children}
      </ScrollableLayout>
    </div>
    <div className={style.aside}>
      <ScrollableLayout>
        {aside}
      </ScrollableLayout>
    </div>
  </div>
);