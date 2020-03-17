import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FileUploader from '../FileUploader';
import Icon from '../Icon';
import IconButton from '../IconButton';
import UploaderImageItem from '../UploaderImageItem';

import { toBase64 } from '../../utils';

const getDefaultValuePreviews = files => files.map(file => file.preview);

const ImageUploader = React.forwardRef(
  ({ accept, className, multiple, onChange, value, ...props }, ref) => {
    const [files, setFiles] = React.useState(value);
    const [preview, setPreview] = React.useState(
      getDefaultValuePreviews(value),
    );

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    const handleDeleteFile = fileToDelete => {
      const filteredFiles = files.filter(
        file => file.name !== fileToDelete.name,
      );

      setFiles(filteredFiles);
      onChange(filteredFiles);
    };

    const handleFileChange = inputFiles => {
      const nextFiles = multiple ? [...files, ...inputFiles] : inputFiles;

      setFiles(nextFiles);
      onChange(inputFiles);

      if (multiple) {
        return;
      }

      setIsLoading(true);

      toBase64(inputFiles[0])
        .then(base64 => {
          setPreview(base64);
          setIsLoading(false);
        })
        .catch(setHasError);
    };

    const handleClear = () => {
      setPreview(undefined);
      setFiles([]);
      onChange([]);
    };

    return (
      <FileUploader
        className={cx('f-ImageUploader', className, {
          'has-preview': !multiple && preview,
          'is-loading': isLoading,
        })}
        files={files}
        onChange={handleFileChange}
        multiple={multiple}
        isLoading={isLoading}
        hasError={hasError}
        overrides={{
          input: { accept },
        }}
        ref={ref}
        value={value}
        {...props}
      >
        {!multiple && preview && (
          <>
            <div
              className='f-ImageUploader-preview'
              style={{
                backgroundImage: `url(${preview})`,
              }}
            />

            <div className='f-ImageUploader-hoverState'>
              <IconButton onClick={handleClear} icon={Icon.ICONS.IconTrash} />
            </div>
          </>
        )}

        {multiple &&
          files.map(file => (
            <UploaderImageItem
              key={file.name}
              handleDelete={handleDeleteFile}
              file={file}
            />
          ))}
      </FileUploader>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';

ImageUploader.propTypes = {
  accept: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      preview: PropTypes.string,
    }),
  ),
};

ImageUploader.defaultProps = {
  accept: 'image/*',
  className: undefined,
  multiple: false,
  value: [],
};

export default ImageUploader;
