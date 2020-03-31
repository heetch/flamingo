import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import DatepickerNavigation from './components/DatepickerNavigation';
import DatepickerInput from './components/DatepickerInput';
import Dropdown from '../Dropdown';
import { StyledDatepicker } from './styles';

const Datepicker = ({
  invalid,
  valid,
  placeholder,
  value,
  onChange,
  formatDate,
  locale,
  renderNavigation,
  ...props
}) => {
  return (
    <StyledDatepicker invalid={invalid} valid={valid} {...props}>
      <Dropdown
        placement='bottom-start'
        triggerer={({ ref, toggle }) => (
          <DatepickerInput
            ref={ref}
            formatDate={formatDate}
            value={value}
            onClick={toggle}
            invalid={invalid}
            valid={valid}
            placeholder={placeholder}
          />
        )}
      >
        {({ hide }) => (
          <DayPicker
            value={value}
            locale={locale}
            selectedDays={[value]}
            initialMonth={value}
            onDayClick={date => {
              onChange(date);
              hide();
            }}
            captionElement={() => null}
            navbarElement={renderNavigation}
          />
        )}
      </Dropdown>
    </StyledDatepicker>
  );
};

Datepicker.displayName = 'Datepicker';

Datepicker.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  formatDate: PropTypes.func,
  renderNavigation: PropTypes.func,
  locale: PropTypes.string,
};

Datepicker.defaultProps = {
  placeholder: 'Select a date',
  locale: 'en',
  formatDate: date => date.toLocaleDateString('en-GB'),
  onChange: () => {},
  renderNavigation: props => <DatepickerNavigation {...props} />,
};

export default Datepicker;
