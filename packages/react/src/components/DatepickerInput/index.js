import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const DatepickerInput = React.forwardRef(
  ({ onClick, placeholder, value, invalid, formatDate }, ref) => (
    <button
      ref={ref}
      type='button'
      onClick={onClick}
      onKeyPress={({ which }) => (which === 13 ? onClick() : undefined)}
      className='f-FormEl f-FormEl--withIcon f-Datepicker'
    >
      {value ? formatDate(value) : placeholder}
      <Icon
        icon={invalid ? Icon.ICONS.IconAlertOctagon : Icon.ICONS.IconCalendar}
        className='f-FormEl-icon'
      />
    </button>
  ),
);

DatepickerInput.displayName = 'DatepickerInput';

DatepickerInput.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  invalid: PropTypes.bool,
  formatDate: PropTypes.func,
};

DatepickerInput.defaultProps = {
  onClick: () => {},
  value: new Date(),
  invalid: false,
  formatDate: date => date.toLocaleDateString('en-GB'),
  placeholder: 'Select a date',
};

export default DatepickerInput;
