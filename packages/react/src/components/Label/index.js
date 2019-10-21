import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';
import { refShapes } from '../../constants';

const Label = ({ className, forwardedRef, htmlFor, ...props }) => (
  <UiText
    type={UiText.TYPES.subContentBold}
    as='label'
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
