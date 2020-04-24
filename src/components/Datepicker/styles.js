import styled from 'styled-components';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';

export const StyledDatepicker = styled(FormElementWrapper).attrs(() => ({
  className: 'f-Datepicker',
}))`
  position: relative;
  cursor: pointer;
  text-align: left;

  .DayPicker {
    display: flex;
    justify-content: center;
  }

  .DayPicker-Day--today {
    color: var(--f-color-brandPrimary);
  }

  .DayPicker-Weekday {
    color: var(--f-color-element--tertiary);
  }

  .DayPicker-Month {
    margin-top: 0;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: var(--f-color-element--tertiary);
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: var(--f-color-brandPrimary);
  }
`;

export const StyledDatepickerNavigation = styled.div`
  padding-left: var(--f-space--xxl);
  padding-right: var(--f-space--xl);
  padding-top: var(--f-space--xl);
  color: var(--f-color-text--primary);
  font-weight: var(--f-fontWeight--bold);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDatepickerInput = styled(FormElement)`
  position: relative;
  cursor: pointer;
  text-align: left;
`;
