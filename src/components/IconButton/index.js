import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import { theme } from '../../theme';

const sizes = Object.values(Icon.SIZES);

const IconButtonComponent = React.forwardRef(
  (
    { className, icon, size, iconColor, disabled, isLoading, ...props },
    ref,
  ) => (
    <Button
      className={cx('f-Button--icon', className)}
      intent={Button.INTENTS.SECONDARY}
      variant={Button.VARIANTS.MINIMAL}
      disabled={disabled}
      ref={ref}
      isLoading={isLoading}
      {...props}
    >
      <Icon
        icon={icon}
        size={size}
        iconColor={disabled ? undefined : iconColor}
      />
    </Button>
  ),
);

IconButtonComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  isLoading: PropTypes.bool,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
};

const IconButton = styled(IconButtonComponent)`
  padding: ${theme.space.m};
  line-height: 1;
  border-radius: 50%;
  color: ${theme.color.icon.dark};

  &:hover {
    background-color: ${theme.color.element.inactive};
    color: ${theme.color.icon.dark};
  }

  & + & {
    margin-left: ${theme.space.m};
  }

  > ${Icon} {
    display: block;
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  }

  ${theme.breakPoint.s} {
    width: auto;
    flex-grow: inherit;
    padding: ${theme.space.l};
  }
`;

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  size: Icon.SIZES.L,
};

IconButton.ICONS = Icon.ICONS;

export default IconButton;
