import React from 'react';

import FormField from '../FormField';
import Input from '../Input';

const InputField = React.forwardRef((props, ref) => (
  <FormField {...props} ref={ref}>
    <Input {...props} />
  </FormField>
));

InputField.displayName = 'InputField';

export default InputField;
