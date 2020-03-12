import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

const { IconCheck, IconAlertOctagon } = Icon.ICONS;
const icons = Object.values(Icon.ICONS);

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
      icon: defaultIcon,
      ...props
    },
    ref,
  ) => {
    const classes = {
      'is-disabled': isDisabled,
      'is-valid': isValid,
      'is-invalid': isInvalid,
    };

    const icon = isValid
      ? IconCheck
      : isInvalid
      ? IconAlertOctagon
      : defaultIcon;

    return (
      <div className={cx('f-FormEl-wrapper', { ...classes })}>
        <UiText
          as='input'
          variant={UiText.VARIANTS.content}
          className={cx('f-FormEl', className, {
            ...classes,
            'f-FormEl--withIcon': !!icon,
          })}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />

        {icon && <Icon icon={icon} className='f-FormEl-icon' />}
      </div>
    );
  },
);

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(icons),
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  icon: undefined,
  invalid: false,
  placeholder: '',
  valid: false,
};

export default Input;
