import styled from 'styled-components';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const styles = {
  stateColor(props) {
    if (props.disabled) {
      return 'var(--f-color-element--tertiary)';
    }
    if (props.invalid) {
      return 'var(--f-color-element--error)';
    }
    if (props.valid) {
      return 'var(--f-color-element--success)';
    }

    return 'var(--f-color-element--tertiary)';
  },
  backgroundColor({ disabled }) {
    if (disabled) {
      return 'var(--f-color-element--inactive)';
    }

    return 'var(--f-color-element--primary)';
  },
  hover: {
    stateColor(props) {
      if (props.disabled) {
        return 'var(--f-color-element--tertiary)';
      }
      if (props.invalid) {
        return 'var(--f-color-element--error)';
      }
      if (props.valid) {
        return 'var(--f-color-element--success)';
      }

      return 'var(--f-color-element--secondary)';
    },
  },
};

const FormElement = styled('div').attrs(({ className }) => ({
  className: cx('f-FormEl', className),
}))`
  display: block;
  width: 100%;
  padding: var(--f-space--m) var(--f-space--xl);
  border: 0;
  border-radius: 1.25rem;
  font-weight: var(--f-fontWeight--normal);
  font-size: var(--f-fontSize--m);
  line-height: var(--f-lineHeight--m);
  color: var(--f-color-text--secondary);
  outline: none;
  appearance: none;
  transition: box-shadow 0.1s ease-out;

  background-color: ${styles.backgroundColor};
  box-shadow: inset 0 0 0 1px ${styles.stateColor};
  padding-right: ${({ withIcon }) =>
    withIcon && 'calc(var(--f-iconSize--m) + var(--f-space--m) * 2)'};
  cursor: ${({ disabled }) => disabled && 'not-allowed;'};

  &:hover {
    box-shadow: inset 0 0 0 1px ${styles.hover.stateColor};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${styles.hover.stateColor};
  }

  @media (max-width: 460px) {
    padding-top: var(--f-space--l);
    padding-bottom: var(--f-space--l);
  }

  & + ${Icon} {
    position: absolute;
    top: 50%;
    right: var(--f-space--l);
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
