import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import FormField from '../FormField';
import Input from '../Input';
import { theme } from '../../theme';

const StyledInput = styled(Input)`
  margin-top: calc(-1 * ${theme.space.l});
`;

const InputField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <StyledInput ref={inputRef} {...props} />
    </FormField>
  ),
);

InputField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(
      typeof Element !== 'undefined' ? Element : Object,
    ),
  }),
};

InputField.displayName = 'InputField';

export default InputField;
