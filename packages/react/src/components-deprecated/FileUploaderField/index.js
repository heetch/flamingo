import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import FileUploader from '../FileUploader';

const FileUploaderField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <FileUploader ref={inputRef} {...props} />
    </FormField>
  ),
);

FileUploaderField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

FileUploaderField.defaultProps = {
  helper: undefined,
  label: undefined,
  inputRef: undefined,
};

FileUploaderField.displayName = 'FileUploaderField';

export default FileUploaderField;
