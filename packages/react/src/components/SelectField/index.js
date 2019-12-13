import React from 'react';

import FormField from '../FormField';
import Select from '../Select';

const SelectField = React.forwardRef((props, ref) => (
  <FormField {...props} ref={ref}>
    <Select {...props} />
  </FormField>
));

SelectField.displayName = 'SelectField';

export default SelectField;
