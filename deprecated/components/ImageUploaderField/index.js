import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import ImageUploader from '../ImageUploader';

const ImageUploaderField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <ImageUploader ref={inputRef} {...props} />
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

ImageUploaderField.defaultProps = {
  helper: undefined,
  label: undefined,
  inputRef: undefined,
};

ImageUploaderField.displayName = 'ImageUploaderField';

export default ImageUploaderField;
