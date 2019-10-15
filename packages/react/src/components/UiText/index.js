import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { UI_TYPES, refShapes } from '../../constants';

const types = Object.keys(UI_TYPES);

const UiText = ({ as: Component, className, forwardedRef, type, ...props }) => (
  <Component
    className={cx('UiText', `UiText--${UI_TYPES[type]}`, className)}
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
  type: UI_TYPES.content,
};

UiText.TYPES = UI_TYPES;

export default UiText;
