import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../_DeprecatedIcon';
import UiText from '../UiText';
import { theme } from '../../theme';

const styles = {
  stateColor(props) {
    if (props.disabled) return theme.color.element.tertiary;
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;

    return theme.color.element.tertiary;
  },
  iconColor(props) {
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;

    return theme.color.icon.dark;
  },
  backgroundColor({ disabled }) {
    if (disabled) return theme.color.element.inactive;

    return theme.color.element.primary;
  },
  hover: {
    stateColor(props) {
      if (props.disabled) return theme.color.element.tertiary;
      if (props.invalid) return theme.color.element.error;
      if (props.valid) return theme.color.element.success;

      return theme.color.element.secondary;
    },
  },
};

const FormElement = styled(UiText).attrs(({ textColor }) => ({
  className: 'f-FormEl',
  textColor: textColor || theme.color.text.secondary,
}))`
  display: block;
  width: 100%;
  padding: ${theme.space.m} ${theme.space.xl};
  border: 0;
  border-radius: 1.25rem;
  outline: none;
  appearance: none;
  transition: box-shadow 0.2s ease-out;

  background-color: ${styles.backgroundColor};
  box-shadow: inset 0 0 0 1px ${styles.stateColor};
  padding-right: ${({ withIcon }) =>
    withIcon && `calc(${theme.iconSize.m} + ${theme.space.m} * 2)`};
  cursor: ${({ disabled }) => disabled && 'not-allowed;'};

  &:hover {
    box-shadow: inset 0 0 0 1px ${styles.hover.stateColor};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${styles.hover.stateColor};
  }

  ${theme.breakPoint.s} {
    padding-top: ${theme.space.l};
    padding-bottom: ${theme.space.l};
  }

  & + ${Icon}, ${Icon} {
    position: absolute;
    top: 50%;
    right: ${theme.space.l};
    transform: translateY(-50%);
    color: ${styles.iconColor};
    transition: color 0.2s ease-out;
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
