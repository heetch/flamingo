import styled from 'styled-components';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';
import { theme } from '../../theme';

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
    color: ${theme.color.brand.primary};
  }

  .DayPicker-Weekday {
    color: ${theme.color.element.tertiary};
  }

  .DayPicker-Month {
    margin-top: 0;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${theme.color.element.tertiary};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${theme.color.brand.primary};
  }
`;

export const StyledDatepickerNavigation = styled.div`
  padding-left: ${theme.space.xxl};
  padding-right: ${theme.space.xl};
  padding-top: ${theme.space.xl};
  color: ${theme.color.text.primary};
  font-weight: ${theme.fontWeight.bold};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDatepickerInput = styled(FormElement)`
  position: relative;
  cursor: pointer;
  text-align: left;
`;
