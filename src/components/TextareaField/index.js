import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Textarea from '../Textarea';

const TextareaField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <Textarea ref={inputRef} {...props} />
    </FormField>
  ),
);

TextareaField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(
      typeof Element !== 'undefined' ? Element : Object,
    ),
  }),
};

TextareaField.displayName = 'TextareaField';

export default TextareaField;
