/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const Label = ({ className, forwardedRef, htmlFor, ...props }) => (
  <label
    className={cx('Label', className)}
    htmlFor={htmlFor}
    ref={forwardedRef}
    {...props}
  />
);

Label.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
};

export default Label;
