import React from 'react';
import './AppLayout.scss';

/**
 * Layout of application.
 * @param {JSX.Element} aside    Aside content of application.
 * @param {JSX.Element} children Main content of application.
 */
export default function AppLayout({ aside, children }) {

  return (
    <div className="AppLayout">
      <div className="AppLayout_Main">
        {aside}
      </div>
      <div className="AppLayout_Aside">
        {children}
      </div>
    </div>
  );
}