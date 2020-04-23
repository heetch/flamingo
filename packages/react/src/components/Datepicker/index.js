import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import DatepickerNavigation from '../DatepickerNavigation';
import DatepickerInput from '../DatepickerInput';
import Dropdown from '../Dropdown';

const Datepicker = ({
  className,
  invalid,
  valid,
  placeholder,
  value,
  onChange,
  formatDate,
  locale,
  renderNavigation,
}) => {
  return (
    <div
      className={cx('f-FormEl-wrapper f-Datepicker', {
        'is-invalid': invalid,
        'is-valid': valid,
        className,
      })}
    >
      <Dropdown
        placement='bottom-start'
        triggerer={({ ref, toggle }) => (
          <DatepickerInput
            ref={ref}
            formatDate={formatDate}
            value={value}
            onClick={toggle}
            invalid={invalid}
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
    </div>
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
  invalid: false,
  valid: false,
  className: undefined,
  value: null,
  locale: 'en',
  formatDate: date => date.toLocaleDateString('en-GB'),
  onChange: () => {},
  renderNavigation: props => <DatepickerNavigation {...props} />,
};

export default Datepicker;
