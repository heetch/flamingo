import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import UploaderItem from '../UploaderItem';

import { toBase64 } from '../../utils';

const UploaderImageItem = React.forwardRef(
  ({ file, overrides, ...props }, ref) => {
    const [preview, setPreview] = React.useState(file.preview);
    const [isLoading, setIsLoading] = React.useState(!file.preview);

    const icon = isLoading ? (
      <Spinner />
    ) : (
      <img src={preview} alt={file.name} />
    );

    React.useEffect(() => {
      if (file.preview) {
        return;
      }

      toBase64(file).then(base64 => {
        setPreview(base64);
        setIsLoading(false);
      });
    }, [file]);

    return (
      <UploaderItem
        overrides={{ icon, ...overrides }}
        file={file}
        ref={ref}
        {...props}
      />
    );
  },
);

UploaderImageItem.displayName = 'UploaderImageItem';

UploaderImageItem.propTypes = {
  className: PropTypes.string,
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({}),
};

UploaderImageItem.defaultProps = {
  overrides: {},
};

export default UploaderImageItem;
