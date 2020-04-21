import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const styles = {
  stateColor({ disabled, invalid, valid, theme: { colors } }) {
    if (disabled) return colors.element.tertiary;
    if (invalid) return colors.element.error;
    if (valid) return colors.element.success;
    return colors.element.tertiary;
  },
  backgroundColor({ disabled, theme: { colors } }) {
    if (disabled) return colors.element.inactive;
    return colors.element.primary;
  },
  hover: {
    stateColor({ disabled, invalid, valid, theme: { colors } }) {
      if (disabled) return colors.element.tertiary;
      if (invalid) return colors.element.error;
      if (valid) return colors.element.success;
      return colors.element.secondary;
    },
  },
};

const FormElement = styled('div').attrs(() => ({
  className: 'f-FormEl',
}))`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces.m} ${theme.spaces.xl}`};
  border: 0;
  border-radius: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  color: ${({ theme }) => theme.colors.text.secondary};
  outline: none;
  appearance: none;
  transition: box-shadow 0.1s ease-out;

  background-color: ${styles.backgroundColor};
  box-shadow: inset 0 0 0 1px ${styles.stateColor};
  padding-right: ${({ withIcon, theme }) =>
    withIcon &&
    `calc(${theme.iconSizes.m} ${theme.iconSizes.m} + ${theme.spaces.m} * 2)`};
  cursor: ${({ disabled }) => disabled && 'not-allowed;'};

  &:hover {
    box-shadow: inset 0 0 0 1px ${styles.hover.stateColor};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${styles.hover.stateColor};
  }

  @media (max-width: 460px) {
    padding-top: ${({ theme }) => theme.spaces.l};
    padding-bottom: ${({ theme }) => theme.spaces.l};
  }

  & + ${Icon} {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.spaces.l};
    transform: translateY(-50%);
    color: ${styles.stateColor};
    pointer-events: none;
  }
`;

FormElement.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  withIcon: PropTypes.bool,
};

export default FormElement;
