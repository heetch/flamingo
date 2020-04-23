import React from 'react';
import PropTypes from 'prop-types';

import Helper from '../Helper';
import UiText from '../UiText';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import { StyledCheckbox } from './styles';

const Checkbox = React.forwardRef(
  ({ children, checked, helper, id, ...props }, ref) => {
    const checkbox = (
      <StyledCheckbox
        defaultChecked={checked}
        id={id}
        name={id}
        ref={ref}
        {...props}
      />
    );

    if (!children) {
      return checkbox;
    }

    return (
      <FormElementWrapper>
        {checkbox}
        <UiText as='label' htmlFor={id} variant={UiText.VARIANTS.content}>
          {children}
          {helper && <Helper>{helper}</Helper>}
        </UiText>
      </FormElementWrapper>
    );
  },
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isUndefined: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  helper: PropTypes.node,
};

Checkbox.defaultProps = {
  value: 'checked',
};

export default Checkbox;
