import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormElementWrapper from '../FormComponents/FormElementWrapper';
import { theme } from '../../theme';
import Helper from '../Helper';
import UiText from '../UiText';

export const StyledRadio = styled('input').attrs(({ defaultChecked }) => ({
  className: 'f-Radio',
  type: 'radio',
  defaultChecked,
}))`
  --size: ${({ size }) => size || theme.iconSize.l} /* 20px */;

  position: relative;
  appearance: none;
  background-color: ${theme.color.element.primary};
  min-width: var(--size);
  margin-right: ${theme.space.l};
  height: var(--size);
  border: 1px solid ${theme.color.element.tertiary};
  border-radius: 50%;
  transition: all 0.1s ease-out;

  &:hover {
    border-color: ${theme.color.element.secondary};
  }

  &:disabled {
    border-color: ${theme.color.element.tertiary} !important;
    background-color: ${theme.color.element.inactive} !important;
    cursor: not-allowed;
  }

  &:checked {
    border-width: 6px;
    border-color: ${theme.color.brand.primary};
  }
`;

const Radio = React.forwardRef(
  ({ children, helper, checked, valid, invalid, ...props }, ref) => {
    if (!children) {
      return <StyledRadio ref={ref} defaultChecked={checked} {...props} />;
    }

    return (
      <FormElementWrapper valid={valid} invalid={invalid}>
        <StyledRadio ref={ref} defaultChecked={checked} {...props} />
        <UiText as='label' htmlFor={props.id} variant={UiText.VARIANTS.content}>
          {children}
          {helper && <Helper>{helper}</Helper>}
        </UiText>
      </FormElementWrapper>
    );
  },
);

Radio.displayName = 'Radio';

Radio.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helper: PropTypes.string,
  size: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default Radio;
