import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Select from '../Select';

const SelectField = React.forwardRef(
  ({ label, helper, selectRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <Select ref={selectRef} {...props} />
    </FormField>
  ),
);

SelectField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  selectRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

SelectField.displayName = 'SelectField';

export default SelectField;
