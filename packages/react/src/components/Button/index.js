import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { INTENTS } from '../../constants';

const intents = Object.values(INTENTS);

const Button = ({ as: Component, className, disabled, intent, ...props }) => (
  <Component
    className={cx('Button', className, {
      'is-disabled': disabled,
      [`is-${intent}`]: intent,
    })}
    disabled={disabled}
    {...props}
  />
);

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
};

Button.defaultProps = {
  as: 'button',
  className: undefined,
  disabled: false,
  intent: INTENTS.PRIMARY,
};

export default Button;
