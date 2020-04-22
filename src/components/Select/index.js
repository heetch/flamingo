import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

const Select = React.forwardRef(({ id, options, ...props }, ref) => {
  return (
    <FormElementWrapper invalid={props.invalid} valid={props.valid}>
      <FormElement as='select' id={id} name={id} ref={ref} withIcon {...props}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </FormElement>

      <Icon icon={Icon.ICONS.IconChevronUpDown} size={Icon.SIZES.L} />
    </FormElementWrapper>
  );
});

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
  disabled: false,
  invalid: false,
  options: [],
  valid: false,
};

export default Select;
