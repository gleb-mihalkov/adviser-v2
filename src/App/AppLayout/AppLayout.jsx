import React from 'react';
import classnames from 'classnames';
import './AppLayout.scss';

/**
 * Layout of application.
 * @param {Boolean}     isAsideShowed True if aside must be showed
 *                                    on mobile device.
 * @param {JSX.Element} aside         Aside content of application.
 * @param {JSX.Element} children      Main content of application.
 */
export default function AppLayout({ isAsideShowed, aside, children }) {
  const classes = classnames({
    'AppLayout': true,
    'AppLayout-AsideShowed': isAsideShowed
  });

  return (
    <div className={classes}>
      <div className="AppLayout_Main">
        {aside}
      </div>
      <div className="AppLayout_Aside">
        {children}
      </div>
    </div>
  );
}