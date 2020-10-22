import styled from 'styled-components';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import Input from '../Input';
import { theme } from '../../theme';

export const StyledDatepicker = styled(FormElementWrapper).attrs(() => ({
  className: 'f-Datepicker',
}))`
  position: relative;
  cursor: pointer;
  text-align: left;

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
    right: 40px;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-popper {
    border: 0;
    border-radius: ${theme.borderRadius.m};
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(25, 1, 52, 0.12);
    z-index: calc(${theme.zIndex.overlay} + 1);

    ${theme.breakPoint.s} {
      position: fixed !important;
      top: 50% !important;
      left: ${theme.space.xl} !important;
      right: ${theme.space.xl} !important;
      transform: translateY(-50%) !important;
    }
  }

  .react-datepicker__portal {
    background-color: rgba(43, 30, 112, 0.8);
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

    &:hover {
      background-color: ${theme.color.element.inactive};
    }
  }

  .react-datepicker__navigation--next {
    right: ${theme.space.xxl};
  }

  .react-datepicker__navigation--previous {
    left: initial;
    right: 60px;
  }

  .react-datepicker__day {
    border-radius: 100%;
    font-size: ${theme.fontSize.m};
    color: ${theme.color.text.primary};
    width: 38px;
    height: 38px;
    line-height: 38px;
    margin: 0;
    transition: background-color 0.2s ease;

    &:hover {
      border-radius: 100%;
      background-color: ${theme.color.element.tertiary};
    }
  }

  .react-datepicker__day--selected {
    &, &:hover {
      background-color: ${theme.color.brand.primary};
      color: white;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${theme.color.element.tertiary};
  }

  .react-datepicker__day--today {
    color: ${theme.color.brand.primary};
    background: none;
  }

  .react-datepicker__close-icon:after {
    background: none;
    width: initial;
    content: '${props => props.clearButtonLabel || 'Clear'}';
    color: ${theme.color.text.link};
    font-size: ${theme.fontSize.s};
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
