import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as SVGS from '../../constants/icons';
import { refShapes } from '../../constants';

const NAMES = Object.keys(SVGS);

const ICONS = NAMES.reduce(
  (icons, icon) => ({
    ...icons,
    [icon]: icon,
  }),
  {},
);

const SIZES = {
  S: 's',
  M: 'm',
  L: 'l',
};

const sizes = Object.values(SIZES);

const Icon = ({ className, forwardedRef, icon, size, ...props }) => (
  <i
    className={cx('Icon', `Icon--${size}`, className)}
    ref={forwardedRef}
    {...props}
  >
    {SVGS[icon]}
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  icon: PropTypes.oneOf(NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
};

Icon.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  size: SIZES.M,
};

Icon.ICONS = ICONS;
Icon.NAMES = NAMES;
Icon.SIZES = SIZES;

export default Icon;
