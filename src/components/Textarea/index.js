import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import Icon from '../_DeprecatedIcon';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import FormElement from '../FormComponents/FormElement';
import { theme } from '../../theme';

export const StyledFormElement = styled(FormElement)`
  min-height: 9.375rem; /* 150px */
  resize: vertical;
`;

export const StyledIcon = styled(Icon)`
  // Increases specificity
  && {
    top: ${theme.space.l};
    transform: none;
  }
`;

const Textarea = React.forwardRef(
  ({ id, className, invalid, valid, ...props }, ref) => {
    return (
      <FormElementWrapper
        className={'f-Textarea-wrapper'}
        invalid={invalid}
        valid={valid}
      >
        <StyledFormElement
          ref={ref}
          as='textarea'
          withIcon={valid || invalid}
          id={id}
          name={id}
          valid={valid}
          invalid={invalid}
          className={cx('f-Textarea', className)}
          {...props}
        />

        {invalid && <StyledIcon icon={Icon.ICONS.IconAlertOctagon} />}

        {valid && !invalid && <StyledIcon icon={Icon.ICONS.IconCheck} />}
      </FormElementWrapper>
    );
  },
);

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

export default Textarea;
