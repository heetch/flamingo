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

const Icon = styled('i').attrs(({ className, icon }) => ({
  className: cx('f-Icon', className),
  children: SVGS[icon],
}))`
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
  size: SIZES.M,
};

Icon.ICONS = ICONS;
Icon.NAMES = NAMES;
Icon.SIZES = SIZES;

export default Icon;
