import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icon from '../Icon';
import {
  StyledDatepickerInput,
  StyledDatepicker,
} from '../DatepickerDay/styles';
import { StyledRangeDatepicker, StyledUiText } from './styles';
import { theme } from '../../theme';

const DatepickerRange = ({
  iconLeft,
  iconColor,
  invalid,
  valid,
  placeholder,
  onChange,
  isClearable,
  inputProps,
  dateFormat,
  locale,
  withPortal,
  startPlaceholder,
  endPlaceholder,
  datepickerColor,
  margin,
  ...props
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (locale) registerLocale(locale.key, locale.dateFnsLocale);
  }, [locale]);

  const DatepickerRangeInput = React.forwardRef((dateInputProps, ref) => {
    return (
      <StyledDatepickerInput
        {...dateInputProps}
        ref={ref}
        placeholder={placeholder}
        icon={Icon.ICONS.IconCalendar}
        iconLeft={iconLeft}
        invalid={invalid}
        valid={valid}
        borderColor={datepickerColor && theme.color.brand.primary}
        {...inputProps}
      />
    );
  });

  DatepickerRangeInput.defaultProps = {
    placeholder: 'Select a date',
  };

  return (
    <StyledDatepicker
      iconLeft={iconLeft}
      iconColor={iconColor}
      datepickerColor={datepickerColor}
    >
      <StyledRangeDatepicker datepickerColor={datepickerColor}>
        {/* StartDate */}
        <StyledUiText variant='contentBlack' margin={margin}>
          {startPlaceholder}
        </StyledUiText>
        <ReactDatePicker
          selected={startDate}
          isClearable={isClearable}
          dateFormat={dateFormat}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={v => {
            setStartDate(v);
            onChange(v);
          }}
          // The fallback will be EN if undefined
          locale={locale ? locale.key : undefined}
          placeholder={placeholder}
          customInput={<DatepickerRangeInput />}
          previousMonthButtonLabel={
            <Icon
              size='l'
              icon={Icon.ICONS.IconChevronLeft}
              iconColor={datepickerColor || theme.color.brand.secondary}
            />
          }
          nextMonthButtonLabel={
            <Icon
              size='l'
              icon={Icon.ICONS.IconChevronRight}
              iconColor={datepickerColor || theme.color.brand.secondary}
            />
          }
          showPopperArrow={false}
          withPortal={withPortal}
          {...props}
        />

        {/* EndDate */}
        <StyledUiText variant='contentBlack' margin={margin}>
          {endPlaceholder}
        </StyledUiText>
        <ReactDatePicker
          selected={endDate}
          isClearable={isClearable}
          dateFormat={dateFormat}
          onChange={v => {
            setEndDate(v);
            onChange(v);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          // The fallback will be EN if undefined
          locale={locale ? locale.key : undefined}
          placeholder={placeholder}
          customInput={<DatepickerRangeInput />}
          previousMonthButtonLabel={
            <Icon
              size='l'
              icon={Icon.ICONS.IconChevronLeft}
              iconColor={datepickerColor || theme.color.brand.secondary}
            />
          }
          nextMonthButtonLabel={
            <Icon
              size='l'
              icon={Icon.ICONS.IconChevronRight}
              iconColor={datepickerColor || theme.color.brand.secondary}
            />
          }
          showPopperArrow={false}
          withPortal={withPortal}
          {...props}
        />
      </StyledRangeDatepicker>
    </StyledDatepicker>
  );
};

DatepickerRange.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  locale: PropTypes.shape({
    key: PropTypes.string.isRequired,
    dateFnsLocale: PropTypes.shape({}), // default fallsback to "en"
  }),
  inputProps: PropTypes.shape({ id: PropTypes.string.isRequired }),
  isClearable: PropTypes.bool,
  dateFormat: PropTypes.string,
  withPortal: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconColor: PropTypes.string,
  startPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,
  datepickerColor: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

DatepickerRange.defaultProps = {
  placeholder: 'Select a date',
  dateFormat: 'dd/MM/yyyy',
  isClearable: false,
  locale: {
    key: 'en',
  },
  withPortal: false,
  onChange: () => {},
};

export default DatepickerRange;
