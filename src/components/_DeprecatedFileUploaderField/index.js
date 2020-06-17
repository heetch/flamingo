import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import FileUploader from '../_DeprecatedFileUploader';

const FileUploaderField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => {
    React.useEffect(() => {
      console.warn(
        '[@heetch/flamingo] The FileUploaderField component has been deprecated. Please use the UploaderField one',
      );
    }, []);

    return (
      <FormField label={label} helper={helper} {...props} ref={ref}>
        <FileUploader ref={inputRef} {...props} />
      </FormField>
    );
  },
);

FileUploaderField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

FileUploaderField.displayName = 'FileUploaderField';

export default FileUploaderField;
