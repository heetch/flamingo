import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

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

const styles = {
  iconSize({ size }) {
    return `var(--f-iconSize--${size})`;
  },
};

const Icon = styled(({ className, icon, iconColor, ...props }) => (
  <i className={cx('f-Icon', className)} {...props} children={SVGS[icon]} />
))`
  display: inline-block;
  width: ${styles.iconSize};
  height: ${styles.iconSize};
  vertical-align: middle;

  svg {
    display: block;
    fill: ${({ iconColor }) => iconColor || 'currentColor'};
    width: ${styles.iconSize};
  }
`;

Icon.displayName = 'Icon';

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
  size: SIZES.M,
  iconColor: undefined,
};

Icon.ICONS = ICONS;
Icon.NAMES = NAMES;
Icon.SIZES = SIZES;

export default Icon;
