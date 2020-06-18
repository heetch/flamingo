import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Uploader from '../Uploader';

const ImageUploaderField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <Uploader ref={inputRef} {...props} />
    </FormField>
  ),
);

ImageUploaderField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

ImageUploaderField.displayName = 'ImageUploaderField';

export default ImageUploaderField;
