import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import { ICONS, refShapes } from '../../constants';

const Spinner = ({ className, forwardedRef, ...props }) => (
  <Icon
    className={cx('Icon--spinner', className)}
    icon={ICONS.IconLoader}
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
