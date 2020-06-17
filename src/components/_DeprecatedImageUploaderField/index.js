import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import ImageUploader from '../_DeprecatedImageUploader';

const ImageUploaderField = React.forwardRef(
  ({ label, helper, inputRef, ...props }, ref) => {
    React.useEffect(() => {
      console.warn(
        '[@heetch/flamingo] The ImageUploaderField component has been deprecated. Please use the UploaderField one',
      );
    }, []);

    return (
      <FormField label={label} helper={helper} {...props} ref={ref}>
        <ImageUploader ref={inputRef} {...props} />
      </FormField>
    );
  },
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
