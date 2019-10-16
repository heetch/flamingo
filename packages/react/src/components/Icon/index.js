import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ICON_SIZES, ICONS_SVGS, refShapes } from '../../constants';

const sizes = Object.values(ICON_SIZES);
const icons = Object.keys(ICONS_SVGS);

const Icon = ({ className, forwardedRef, icon, size, ...props }) => (
  <i
    className={cx('Icon', `Icon--${size}`, className)}
    ref={forwardedRef}
    {...props}
  >
    {ICONS_SVGS[icon]}
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  icon: PropTypes.oneOf(icons).isRequired,
  size: PropTypes.oneOf(sizes),
};

Icon.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  size: ICON_SIZES.M,
};

Icon.SIZES = ICON_SIZES;

export default Icon;
