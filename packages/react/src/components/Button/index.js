import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import Spinner from '../Spinner';

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

const Button = React.forwardRef(
  (
    {
      as: Component,
      className,
      children,
      disabled,
      intent,
      isLoading,
      type,
      variant,
      ...props
    },
    ref,
  ) => (
    <Component
      className={cx('f-Button', className, {
        'is-disabled': disabled,
        'is-loading': isLoading,
        [`is-${intent}`]: intent,
        [`is-${variant}`]: variant,
      })}
      disabled={disabled}
      type={type}
      ref={ref}
      {...props}
    >
      <div className='f-Button-loadingState'>
        <Spinner size={Icon.SIZES.L} />
      </div>

      <span className='f-Button-content'>{children}</span>
    </Component>
  ),
);

Button.displayName = 'Button';

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
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
  intent: INTENTS.PRIMARY,
  isLoading: false,
  type: 'button',
  variant: undefined,
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
