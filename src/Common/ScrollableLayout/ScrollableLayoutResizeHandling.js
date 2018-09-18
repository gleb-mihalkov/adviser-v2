/**
 * Starts the handling of window resizing.
 */
export const startHandling = () => {
  if (isAttached) {
    return;
  }

  if (isFirstTime) {
    isFirstTime = false;
    refreshStyles();
  }

  window.addEventListener('resize', refreshStyles);
  isAttached = true;
}

/**
 * Stops the handling of window resizing.
 */
export const stopHandling = () => {
  if (!isAttached) {
    return;
  }

  window.removeEventListener('resize', refreshStyles);
  isAttached = false;
}

/**
 * True if the handler are attached at first time.
 * @type {Boolean}
 */
let isFirstTime = true;

/**
 * True if the handler is already attached.
 * @type {Boolean}
 */
let isAttached = false;

/**
 * Refreshs the style of scrollable areas.
 */
const refreshStyles = () => {
  const width = getWidth();

  let stylesNode = document.getElementById('scrollableLayoutStyles');

  if (!stylesNode) {
    stylesNode = document.createElement('STYLE');
    stylesNode.setAttribute('type', 'text/css');
    stylesNode.setAttribute('id', 'scrollableLayoutStyles');
    document.head.appendChild(stylesNode);
  }

  stylesNode.innerHTML = `
    *[data-scrollable] {
      margin-right: -${width}px;
    }
  `;
}

/**
 * Returns scrollbar's width.
 * @returns {Number} Width of scrollbars.
 */
const getWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar';

  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
 }