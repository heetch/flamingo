import styled from 'styled-components/macro';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import Input from '../Input';
import { theme } from '../../theme';

export const StyledDatepicker = styled(FormElementWrapper).attrs(() => ({
  className: 'f-Datepicker',
}))`
  position: relative;
  text-align: left;
  font-family: Avenir;
  .react-datepicker-wrapper,
  > div {
    width: 100%;
  }

  .react-datepicker__tab-loop {
    width: auto;
  }

  .react-datepicker {
    border-width: 0;
    font-family: inherit;
    border-radius: ${theme.borderRadius.m};

    ${theme.breakPoint.s} {
      display: flex;
    }
  }

  .react-datepicker__header {
    padding-top: ${theme.space.xxl};
    border: 0;
    background: none;
  }

  .react-datepicker__month {
    margin: ${theme.space.xl};
    margin-top: 0;
  }

  .react-datepicker__current-month {
    padding-left: ${theme.space.xxl};
    padding-right: ${theme.space.xxl};
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.text.primary};
    text-align: left;
  }

  .react-datepicker__day-names {
    margin-top: ${theme.space.xl};
  }

  .react-datepicker__day-name {
    color: ${theme.color.text.tertiary};
    font-size: ${theme.fontSize.s};
    text-transform: capitalize;
    width: 38px;
    margin: 0;
  }

  .react-datepicker__close-icon {
    right: 4px;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-popper {
    border: 0;
    border-radius: 5px;
    background-color: #fff;
    z-index: calc(${theme.zIndex.overlay} + 1);
    border: 1px solid ${theme.color.brand.primaryInactive};

    ${theme.breakPoint.s} {
      position: fixed !important;
      top: 50% !important;
      left: ${theme.space.xl} !important;
      right: ${theme.space.xl} !important;
      transform: translateY(-50%) !important;
    }
  }

  .react-datepicker__portal {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .react-datepicker__navigation {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background: none;
    color: ${theme.color.icon.dark};
    border: 0;
    text-indent: 0;
    margin: ${theme.space.m} 0;
    cursor: pointer;
  }

  .react-datepicker__navigation--next {
    right: ${theme.space.xxl};
  }

  .react-datepicker__navigation--previous {
    left: initial;
    right: 60px;
  }

  .react-datepicker__day {
    border-radius: 2px;
    font-size: ${theme.fontSize.m};
    width: 38px;
    height: 38px;
    line-height: 40px;
    margin: 0;
    transition: background-color 0.2s ease;

    &:hover:not(.react-datepicker__day--disabled) {
      border-radius: 100%;
      background-color: ${theme.color.brand.secondary};
      color: white;
    }
  }

  .react-datepicker__day--selected {
    &,
    &:hover {
      background-color: ${theme.color.brand.secondary};
      color: white;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${theme.color.element.tertiary};
  }

  .react-datepicker__day--today {
    color: ${theme.color.brand.secondary};
    background: none;
  }

  .react-datepicker__day--outside-month {
    visibility: hidden;
  }

  .react-datepicker__header__dropdown {
    text-align: left;
    padding: ${theme.space.s} ${theme.space.s} ${theme.space.s}
      ${theme.space.xxl};
    font-size: ${theme.fontSize.m};
  }

  .react-datepicker__year-dropdown--scrollable {
    height: auto;
  }
  .react-datepicker__close-icon:after {
    background: ${theme.color.brand.secondary};
    color: white;
    font-size: ${theme.fontSize.m};
    width: 1.25rem;
    height: 1.25rem;
  }
  .react-datepicker__year-read-view--down-arrow {
    margin-left: ${theme.space.s};
    border-width: 0.6rem;
    top: 6px;
  }

  .react-datepicker__year-dropdown-container--scroll {
    margin: 0px;
  }

  .react-datepicker__month-container {
    margin: 0 auto;
  }
`;

export const StyledDatepickerInput = styled(Input)`
  position: relative;
  cursor: pointer;
  text-align: left;
`;
