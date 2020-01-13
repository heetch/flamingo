import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Input from '../Input';

const InputField = React.forwardRef(({ label, helper, ...props }, ref) => (
  <FormField label={label} helper={helper} {...props} ref={ref}>
    <Input {...props} />
  </FormField>
));

InputField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
};

InputField.defaultProps = {
  helper: undefined,
  label: undefined,
};

InputField.displayName = 'InputField';

export default InputField;
