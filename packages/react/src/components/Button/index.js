import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const VARIANTS = {
  DEFAULT: 'default',
  OUTLINE: 'outline',
  MINIMAL: 'minimal',
};

const intents = Object.values(INTENTS);
const variants = Object.values(VARIANTS);

const Button = ({
  as: Component,
  className,
  disabled,
  forwardedRef,
  intent,
  variant,
  ...props
}) => (
  <Component
    className={cx('Button', className, {
      'is-disabled': disabled,
      [`is-${intent}`]: intent,
      [`is-${variant}`]: variant,
    })}
    disabled={disabled}
    ref={forwardedRef}
    {...props}
  />
);

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType(refShapes),
  intent: PropTypes.oneOf(intents),
  variant: PropTypes.oneOf(variants),
};

Button.defaultProps = {
  as: 'button',
  className: undefined,
  disabled: false,
  forwardedRef: undefined,
  intent: INTENTS.PRIMARY,
  variant: undefined,
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
