import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import Spinner from '../Spinner';
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
  children,
  disabled,
  forwardedRef,
  intent,
  isLoading,
  type,
  variant,
  ...props
}) => (
  <Component
    className={cx('Button', className, {
      'is-disabled': disabled,
      'is-loading': isLoading,
      [`is-${intent}`]: intent,
      [`is-${variant}`]: variant,
    })}
    disabled={disabled}
    ref={forwardedRef}
    type={type}
    {...props}
  >
    <div className='Button-loadingState'>
      <Spinner size={Icon.SIZES.L} />
    </div>

    <span className='Button-content'>{children}</span>
  </Component>
);

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType(refShapes),
  intent: PropTypes.oneOf(intents),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(variants),
};

Button.defaultProps = {
  as: 'button',
  className: undefined,
  children: undefined,
  disabled: false,
  forwardedRef: undefined,
  intent: INTENTS.PRIMARY,
  isLoading: false,
  type: 'button',
  variant: undefined,
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
