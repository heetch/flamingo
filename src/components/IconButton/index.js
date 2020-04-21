import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';

const sizes = Object.values(Icon.SIZES);

const IconButtonComponent = ({
  className,
  icon,
  size,
  iconColor,
  disabled,
  ...props
}) => (
  <Button
    className={cx('f-Button--icon', className)}
    intent={Button.INTENTS.SECONDARY}
    variant={Button.VARIANTS.MINIMAL}
    disabled={disabled}
    {...props}
  >
    <Icon icon={icon} size={size} iconColor={!disabled && iconColor} />
  </Button>
);

IconButtonComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
};

const IconButton = styled(IconButtonComponent)`
  padding: ${({ theme }) => theme.spaces.m};
  line-height: 1;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.icon.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.element.inactive};
    color: ${({ theme }) => theme.colors.icon.dark};
  }

  & + & {
    margin-left: ${({ theme }) => theme.spaces.m};
  }

  ${Icon} {
    display: block;
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    width: auto;
    flex-grow: inherit;
    padding: ${({ theme }) => theme.spaces.l};
  }
`;

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
};

IconButton.defaultProps = {
  size: Icon.SIZES.L,
};

IconButton.ICONS = Icon.ICONS;

export default IconButton;
