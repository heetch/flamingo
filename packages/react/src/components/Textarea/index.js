import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

const defaultIconProps = {
  className: 'FormEl-icon',
  size: Icon.SIZES.S,
};

const Textarea = ({
  id,
  className,
  disabled: isDisabled,
  invalid: isInvalid,
  onChange,
  placeholder,
  valid: isValid,
  ...props
}) => {
  const classes = {
    'is-disabled': isDisabled,
    'is-valid': isValid,
    'is-invalid': isInvalid,
  };

  return (
    <div className={cx('FormEl-wrapper', 'Textarea-wrapper', { ...classes })}>
      <UiText
        as='textarea'
        type={UiText.TYPES.content}
        className={cx('FormEl', 'Textarea', className, { ...classes })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      {isInvalid && <Icon icon='IconClose' {...defaultIconProps} />}
      {isValid && <Icon icon='IconCheck' {...defaultIconProps} />}
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

Textarea.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  placeholder: '',
  valid: false,
};

export default Textarea;
