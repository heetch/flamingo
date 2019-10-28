import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as SVGS from '../../constants/icons';

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

const Icon = React.forwardRef(({ className, icon, size, ...props }, ref) => (
  <i className={cx('Icon', `Icon--${size}`, className)} ref={ref} {...props}>
    {SVGS[icon]}
  </i>
));

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
};

Icon.defaultProps = {
  className: undefined,
  size: SIZES.M,
};

Icon.ICONS = ICONS;
Icon.NAMES = NAMES;
Icon.SIZES = SIZES;

export default Icon;
