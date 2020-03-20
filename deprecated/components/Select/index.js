import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

const Select = React.forwardRef(
  (
    {
      className,
      disabled: isDisabled,
      id,
      invalid: isInvalid,
      onChange,
      options,
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
      <div className={cx('f-FormEl-wrapper', { ...classes })}>
        <UiText
          as='select'
          variant={UiText.VARIANTS.content}
          className={cx('f-FormEl', 'f-FormEl--withIcon', className, {
            ...classes,
          })}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </UiText>

        <Icon
          icon={Icon.ICONS.IconChevronUpDown}
          className='f-FormEl-icon'
          size={Icon.SIZES.L}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  valid: PropTypes.bool,
};

Select.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  options: [],
  valid: false,
};

export default Select;
