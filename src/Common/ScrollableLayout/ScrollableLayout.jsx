import React, { Component } from 'react';

import {
  startHandling,
  stopHandling
} from './ScrollableLayoutResizeHandling';

import style from './ScrollableLayout.module.css';

/**
 * Layout of scrollable content.
 */
export default class ScrollableLayout extends Component {

  /**
   * Handles the mounting.
   */
  componentDidMount() {
    startHandling();
  }

  /**
   * Handles the unmounting.
   */
  componentWillUnmount() {
    stopHandling();
  }

  /**
   * Renders the component.
   */
  render() {
    const { children } = this.props;

    return (
      <div className={style.root}>
        <div className={style.wrapper} data-scrollable>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}