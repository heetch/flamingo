import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import UiText from '../UiText';
import { theme } from '../../theme';

const styles = {
  stateColor(props) {
    if (props.disabled) return theme.color.element.inactive;
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;

    return theme.color.element.overlay;
  },
  borderColor(props) {
    if (props.disabled) return theme.color.element.inactive;
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;

    return theme.color.element.inactive;
  },
  iconColor(props) {
    if (props.iconColor) return props.iconColor;
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;
    if (props.disabled) return theme.color.element.inactive;
    if (props.as === 'select') return theme.color.brand.secondary;

    return theme.color.icon.dark;
  },
  focus: {
    stateColor(props) {
      if (props.borderColor) return props.borderColor;
      if (props.disabled) return theme.color.element.inactive;
      if (props.invalid) return theme.color.element.error;
      if (props.valid) return theme.color.element.success;

      return theme.color.brand.secondary;
    },
  },
};

const FormElement = styled(UiText).attrs(({ textColor }) => ({
  className: 'f-FormEl',
  textColor: textColor || theme.color.text.secondary,
}))`
  display: block;
  width: 100%;
  padding: ${theme.space.m} 0 ${theme.space.m};
  border-radius: 0;
  outline: none;
  appearance: none;
  border: unset;
  color: ${styles.stateColor};
  background-color: ${theme.color.element.primary};
  border-bottom: 1px solid ${styles.borderColor};
  padding-right: ${({ withIcon, iconLeft }) =>
    withIcon &&
    !iconLeft &&
    `calc(${theme.iconSize.l} + ${theme.space.l} * 2)`};

  padding-left: ${({ withIcon, iconLeft }) =>
    withIcon && iconLeft && `calc(${theme.iconSize.l} + ${theme.space.l} * 2)`};

  &:focus {
    border-bottom: 1px solid ${styles.focus.stateColor};
    transition: border 0.2s ease-out;
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
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default FormElement;
