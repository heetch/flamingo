import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

const Select = React.forwardRef(
  ({ id, options, placeholder, ...props }, ref) => {
    return (
      <FormElementWrapper invalid={props.invalid} valid={props.valid}>
        <FormElement
          as='select'
          id={id}
          name={id}
          ref={ref}
          withIcon
          {...props}
        >
          {placeholder && <option value=''>{placeholder}</option>}
          {options.map(({ label, value, disabled = false }) => (
            <option key={value} value={value} disabled={disabled}>
              {label}
            </option>
          ))}
        </FormElement>
        {props.valid ? (
          <Icon icon={Icon.ICONS.IconCheck} size={Icon.SIZES.L} />
        ) : props.invalid ? (
          <Icon icon={Icon.ICONS.IconAlertTriangle} size={Icon.SIZES.L} />
        ) : (
          <Icon icon={Icon.ICONS.IconChevronDown} size={Icon.SIZES.L} />
        )}
      </FormElementWrapper>
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
      disabled: PropTypes.bool,
    }),
  ),
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
};

export default Select;
