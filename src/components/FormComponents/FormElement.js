import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const styles = {
  stateColor({ disabled, invalid, valid, theme: { color } }) {
    if (disabled) return color.element.tertiary;
    if (invalid) return color.element.error;
    if (valid) return color.element.success;
    return color.element.tertiary;
  },
  backgroundColor({ disabled, theme: { color } }) {
    if (disabled) return color.element.inactive;
    return color.element.primary;
  },
  hover: {
    stateColor({ disabled, invalid, valid, theme: { color } }) {
      if (disabled) return color.element.tertiary;
      if (invalid) return color.element.error;
      if (valid) return color.element.success;
      return color.element.secondary;
    },
  },
};

const FormElement = styled('div').attrs(() => ({
  className: 'f-FormEl',
}))`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.space.m} ${theme.space.xl}`};
  border: 0;
  border-radius: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.color.text.secondary};
  outline: none;
  appearance: none;
  transition: box-shadow 0.1s ease-out;

  background-color: ${styles.backgroundColor};
  box-shadow: inset 0 0 0 1px ${styles.stateColor};
  padding-right: ${({ withIcon, theme }) =>
    withIcon &&
    `calc(${theme.iconSize.m} ${theme.iconSize.m} + ${theme.space.m} * 2)`};
  cursor: ${({ disabled }) => disabled && 'not-allowed;'};

  &:hover {
    box-shadow: inset 0 0 0 1px ${styles.hover.stateColor};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${styles.hover.stateColor};
  }

  @media (max-width: 460px) {
    padding-top: ${({ theme }) => theme.space.l};
    padding-bottom: ${({ theme }) => theme.space.l};
  }

  & + ${Icon} {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.space.l};
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
