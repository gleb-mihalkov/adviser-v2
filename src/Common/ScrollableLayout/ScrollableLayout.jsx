import React from 'react';
import './ScrollableLayout.scss';

/**
 * Wraps content info scrollable box.
 * @param  {JSX.Element} children Scrollable content.
 * @return {JSX.Element}          Element.
 */
export default function ScrollableLayout({ children }) {

  return (
    <div className="ScrollableLayout">
      <div className="ScrollableLayout_Inner">
        {children}
      </div>
    </div>
  );
}