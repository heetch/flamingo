import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

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
        variant={UiText.VARIANTS.content}
        className={cx('FormEl', 'Textarea', className, {
          ...classes,
          'FormEl--withIcon': isValid || isInvalid,
        })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      {isInvalid && (
        <Icon icon={Icon.ICONS.IconAlertOctagon} className='FormEl-icon' />
      )}

      {isValid && <Icon icon={Icon.ICONS.IconCheck} className='FormEl-icon' />}
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
