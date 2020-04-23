import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

const { IconCheck, IconAlertOctagon } = Icon.ICONS;
const icons = Object.values(Icon.ICONS);

const Input = React.forwardRef(({ id, icon: defaultIcon, ...props }, ref) => {
  const icon = props.invalid
    ? IconAlertOctagon
    : props.valid
    ? IconCheck
    : defaultIcon;

  return (
    <FormElementWrapper invalid={props.invalid} valid={props.valid}>
      <FormElement
        as='input'
        name={id}
        ref={ref}
        withIcon={!!icon}
        {...props}
      />

      {icon && <Icon icon={icon} />}
    </FormElementWrapper>
  );
});

Input.propTypes = {
  icon: PropTypes.oneOf(icons),
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default Input;
