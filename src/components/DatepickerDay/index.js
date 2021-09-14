import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icon from '../Icon';
import { StyledDatepickerInput, StyledDatepicker } from './styles';
import { theme } from '../../theme';

const DatepickerDay = ({
  invalid,
  valid,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  isClearable,
  inputProps,
  dateFormat,
  locale,
  withPortal,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState(value);
  /* Storing the focus state is a workaround for a bug when using a custom input component:
   * See more: https://github.com/Hacker0x01/react-datepicker/issues/2051#issuecomment-665223142
   */
  const [stateHasFocus, setStateHasFocus] = useState(false);

  useEffect(() => {
    if (locale) registerLocale(locale.key, locale.dateFnsLocale);
  }, [locale]);

  const DatepickerDayInput = React.forwardRef((dateInputProps, ref) => {
    return (
      <StyledDatepickerInput
        {...dateInputProps}
        ref={ref}
        placeholder={placeholder}
        icon={Icon.ICONS.IconCalendar}
        invalid={invalid}
        valid={valid}
        autoFocus={stateHasFocus}
        {...inputProps}
      />
    );
  });

  DatepickerDayInput.defaultProps = {
    placeholder: 'Select a date',
  };

  return (
    <StyledDatepicker>
      <ReactDatePicker
        popperProps={{
          strategy: 'fixed',
          positionFixed: true,
        }}
        selected={selectedDate}
        isClearable={isClearable}
        dateFormat={dateFormat}
        onChange={v => {
          setSelectedDate(v);
          onChange(v);
        }}
        onFocus={e => {
          setStateHasFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={e => {
          setStateHasFocus(false);
          if (onBlur) onBlur(e);
        }}
        // The fallback will be EN if undefined
        locale={locale ? locale.key : undefined}
        placeholder={placeholder}
        customInput={<DatepickerDayInput />}
        previousMonthButtonLabel={
          <Icon
            size='l'
            icon={Icon.ICONS.IconChevronLeft}
            iconColor={theme.color.brand.secondary}
          />
        }
        nextMonthButtonLabel={
          <Icon
            size='l'
            icon={Icon.ICONS.IconChevronRight}
            iconColor={theme.color.brand.secondary}
          />
        }
        showPopperArrow={false}
        withPortal={withPortal}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            boundariesElement: 'viewport',
          },
        }}
        {...props}
      />
    </StyledDatepicker>
  );
};

DatepickerDay.displayName = 'DatepickerDay';

DatepickerDay.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  locale: PropTypes.shape({
    key: PropTypes.string.isRequired,
    dateFnsLocale: PropTypes.shape({}), // default fallsback to "en"
  }),
  inputProps: PropTypes.shape({ id: PropTypes.string.isRequired }),
  focusPlaceholder: PropTypes.string,
  isClearable: PropTypes.bool,
  popperPlacement: PropTypes.string,
  dateFormat: PropTypes.string,
  withPortal: PropTypes.bool,
};

DatepickerDay.defaultProps = {
  placeholder: 'Select a date',
  focusPlaceholder: 'dd / mm / yyyy',
  dateFormat: 'dd/MM/yyyy',
  isClearable: false,
  locale: {
    key: 'en',
  },
  popperPlacement: 'bottom-start',
  withPortal: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

export default DatepickerDay;
