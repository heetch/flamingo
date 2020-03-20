import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Input from '../Input';

const InputField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <Input ref={inputRef} {...props} />
    </FormField>
  ),
);

InputField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

InputField.defaultProps = {
  helper: undefined,
  label: undefined,
  inputRef: undefined,
};

InputField.displayName = 'InputField';

export default InputField;
