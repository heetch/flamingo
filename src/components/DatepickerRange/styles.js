import styled from 'styled-components/macro';
import UiText from '../UiText';
import { theme } from '../../theme';

export const StyledRangeDatepicker = styled.div`
  .react-datepicker__day--in-selecting-range {
    background-color: ${({ isPink }) =>
      isPink ? theme.color.brand.primary : theme.color.brand.secondary};
    color: white;
    border-radius: 0%;
  }

  .react-datepicker__day--in-selecting-range .react-datepicker__day--today {
    background-color: red !important ;
  }

  .react-datepicker__day--selecting-range-start,
  .react-datepicker__day--selecting-range-start:hover {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    background-color: ${({ isPink }) =>
      isPink ? theme.color.brand.primary : theme.color.brand.secondary};
  }

  .react-datepicker__day--selecting-range-end:not(.react-datepicker__day--selecting-range-start),
  .react-datepicker__day--selecting-range-end:not(.react-datepicker__day--selecting-range-start):hover {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    background-color: ${({ isPink }) =>
      isPink ? theme.color.brand.primary : theme.color.brand.secondary};
    color: white;
  }

  .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: white;
    color: black;
  }
  .react-datepicker__day--in-range .react-datepicker__day--in-selecting-range {
    background-color: ${({ isPink }) =>
      isPink ? theme.color.brand.primary : theme.color.brand.secondary};
  }
`;

export const StyledUiText = styled(UiText)`
  margin: ${({ margin }) => (margin ? { margin } : `${theme.space.l} 0`)};
`;
