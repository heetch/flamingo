import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';
import { theme } from '../../theme';

const FormSelectElement = styled(FormElement)`
  color: ${props => (props.isEmpty ? theme.color_v3.type.light : 'inherit')};
`;

const Select = React.forwardRef(
  ({ id, options, placeholder, ...props }, ref) => {
    const [isEmpty, setIsEmpty] = useState(!props.defaultValue);

    const onChange = useCallback(
      e => {
        setIsEmpty(!e.target.value);
        if (typeof props.onChange === 'function') props.onChange(e);
      },
      [props],
    );

    return (
      <FormElementWrapper invalid={props.invalid} valid={props.valid}>
        <FormSelectElement
          as='select'
          id={id}
          name={id}
          ref={ref}
          withIcon
          {...props}
          onChange={onChange}
          defaultValue={props.defaultValue || ''}
          isEmpty={isEmpty}
        >
          <option disabled value='' hidden={!placeholder}>
            {placeholder || ''}
          </option>
          {options.map(({ label, value, disabled = false }) => (
            <option key={value} value={value} disabled={disabled}>
              {label}
            </option>
          ))}
        </FormSelectElement>
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  options: [],
};

export default Select;
