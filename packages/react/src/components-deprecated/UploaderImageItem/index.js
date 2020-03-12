import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import UploaderItem from '../UploaderItem';

import { toBase64 } from '../../utils';

const UploaderImageItem = React.forwardRef(
  ({ file, overrides, ...props }, ref) => {
    const [preview, setPreview] = React.useState(undefined);
    const [isLoading, setIsLoading] = React.useState(true);

    const icon = isLoading ? (
      <Spinner />
    ) : (
      <img src={preview} alt={file.name} />
    );

    React.useEffect(() => {
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
  file: PropTypes.instanceOf(File).isRequired,
  overrides: PropTypes.shape({}),
};

UploaderImageItem.defaultProps = {
  overrides: {},
};

export default UploaderImageItem;
