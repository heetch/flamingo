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
    current: PropTypes.instanceOf(Element),
  }),
};

TextareaField.defaultProps = {
  helper: undefined,
  label: undefined,
  inputRef: undefined,
};

TextareaField.displayName = 'TextareaField';

export default TextareaField;
