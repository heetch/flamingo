import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import { refShapes } from '../../constants';

const Spinner = ({ className, forwardedRef, ...props }) => (
  <Icon
    className={cx('Spinner', className)}
    icon={Icon.ICONS.IconLoader}
    ref={forwardedRef}
    {...props}
  />
);

Spinner.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
};

Spinner.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
};

export default Spinner;
