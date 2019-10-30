import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

const Input = React.forwardRef(
  (
    {
      className,
      disabled: isDisabled,
      id,
      invalid: isInvalid,
      onChange,
      placeholder,
      valid: isValid,
      ...props
    },
    ref,
  ) => {
    const classes = {
      'is-disabled': isDisabled,
      'is-valid': isValid,
      'is-invalid': isInvalid,
    };

    return (
      <div className={cx('f-FormEl-wrapper', 'Input-wrapper', { ...classes })}>
        <UiText
          as='input'
          variant={UiText.VARIANTS.content}
          className={cx('f-FormEl', 'Input', className, {
            ...classes,
            'f-FormEl--withIcon': isValid || isInvalid,
          })}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />

        {isInvalid && (
          <Icon icon={Icon.ICONS.IconAlertOctagon} className='f-FormEl-icon' />
        )}

        {isValid && (
          <Icon icon={Icon.ICONS.IconCheck} className='f-FormEl-icon' />
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  placeholder: '',
  valid: false,
};

export default Input;
