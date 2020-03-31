import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

const { IconCheck, IconAlertOctagon } = Icon.ICONS;
const icons = Object.values(Icon.ICONS);

const Input = React.forwardRef(
  ({ className, id, icon: defaultIcon, ...props }, ref) => {
    const icon = props.invalid
      ? IconAlertOctagon
      : props.valid
      ? IconCheck
      : defaultIcon;

    return (
      <FormElementWrapper invalid={props.invalid} valid={props.valid}>
        <FormElement
          as='input'
          className={cx('f-FormEl', className)}
          id={id}
          name={id}
          ref={ref}
          withIcon={!!icon}
          {...props}
        />

        {icon && <Icon icon={icon} />}
      </FormElementWrapper>
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
