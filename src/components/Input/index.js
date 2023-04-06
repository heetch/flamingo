import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

const { IconCheck, IconAlertTriangle } = Icon.ICONS;
const icons = Object.values(Icon.ICONS);

const Input = React.forwardRef(
  (
    { id, icon: defaultIcon, iconColor, iconLeft, borderColor, ...props },
    ref,
  ) => {
    const icon = props.invalid
      ? IconAlertTriangle
      : props.valid
      ? IconCheck
      : defaultIcon;

    return (
      <FormElementWrapper invalid={props.invalid} valid={props.valid}>
        {icon && iconLeft && <Icon icon={icon} size={'l'} />}
        <FormElement
          as='input'
          iconColor={iconColor}
          name={id}
          id={id}
          ref={ref}
          withIcon={!!icon}
          iconLeft={iconLeft}
          borderColor={borderColor}
          {...props}
        />

        {icon && !iconLeft && <Icon icon={icon} size={'l'} />}
      </FormElementWrapper>
    );
  },
);

Input.propTypes = {
  icon: PropTypes.oneOf(icons),
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  iconColor: PropTypes.string,
  iconLeft: PropTypes.bool,
  borderColor: PropTypes.string,
};

export default Input;
