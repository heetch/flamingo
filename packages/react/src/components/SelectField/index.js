import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Select from '../Input';

const SelectField = React.forwardRef(({ label, helper, ...props }, ref) => (
  <FormField label={label} helper={helper} {...props} ref={ref}>
    <Select {...props} />
  </FormField>
));

SelectField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
};

SelectField.defaultProps = {
  helper: undefined,
  label: undefined,
};

SelectField.displayName = 'SelectField';

export default SelectField;
