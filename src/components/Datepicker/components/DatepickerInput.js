import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import { StyledDatepickerInput } from '../styles';

const DatepickerInput = React.forwardRef(
  ({ onClick, placeholder, value, invalid, valid, formatDate }, ref) => (
    <StyledDatepickerInput
      as={'button'}
      ref={ref}
      type='button'
      onClick={onClick}
      onKeyPress={({ which }) => (which === 13 ? onClick() : undefined)}
      className='f-Datepicker'
      withIcon
      invalid={invalid}
      valid={valid}
    >
      {value ? formatDate(value) : placeholder}
      <Icon
        icon={invalid ? Icon.ICONS.IconAlertOctagon : Icon.ICONS.IconCalendar}
      />
    </StyledDatepickerInput>
  ),
);

DatepickerInput.displayName = 'DatepickerInput';

DatepickerInput.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  formatDate: PropTypes.func,
};

export default DatepickerInput;
