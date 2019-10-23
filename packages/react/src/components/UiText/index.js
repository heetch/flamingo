import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
};

const types = Object.keys(TYPES);

const UiText = ({ as: Component, className, forwardedRef, type, ...props }) => (
  <Component
    className={cx('UiText', `UiText--${TYPES[type]}`, className)}
    ref={forwardedRef}
    {...props}
  />
);

UiText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  type: PropTypes.oneOf(types),
};

UiText.defaultProps = {
  as: 'p',
  className: undefined,
  forwardedRef: undefined,
  type: TYPES.content,
};

UiText.TYPES = TYPES;

export default UiText;
