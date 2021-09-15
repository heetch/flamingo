import styled from 'styled-components';
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
    if (props.invalid) return theme.color.element.error;
    if (props.valid) return theme.color.element.success;
    if (props.disabled) return theme.color.element.inactive;
    if (props.as === 'select') return theme.color.brand.secondary;

    return theme.color.icon.dark;
  },
  focus: {
    stateColor(props) {
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
  padding: ${theme.space.m} ${theme.space.xl};
  border-radius: 0;
  outline: none;
  appearance: none;
  transition: box-shadow 0.2s ease-out;
  border: unset;
  color: ${styles.stateColor};
  background-color: ${theme.color.element.primary};
  border-bottom: 1px solid ${styles.borderColor} !important;
  padding-right: ${({ withIcon }) =>
    withIcon && `calc(${theme.iconSize.l} + ${theme.space.l} * 2)`};

  &:focus {
    border-bottom: 1px solid ${styles.focus.stateColor} !important;
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
};

export default FormElement;
