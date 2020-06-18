import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import IconButton from '../IconButton';
import UploaderImageItem from '../UploaderImageItem';

import { toBase64 } from '../../utils/index.ts';
import { StyledImageUploader, UploaderPreview, PreviewHover } from './styles';

const getDefaultValuePreviews = files =>
  Array.isArray(files) ? files.map(file => file.preview) : [];

const validateFilesType = (files, accept) => {
  const formats = accept.split(',');
  return files.reduce((isValid, file) => {
    // if at least one file is not valid, return false
    if (!isValid) return isValid;
    return formats.includes(file.type);
  }, true);
};

const ImageUploader = React.forwardRef(
  (
    { accept, className, multiple, onBadFormat, onChange, value, ...props },
    ref,
  ) => {
    const [files, setFiles] = React.useState(value);
    const [preview, setPreview] = React.useState(
      getDefaultValuePreviews(value),
    );

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
      // eslint-disable-next-line no-console
      console.warn(
        '[@heetch/flamingo] The ImageUploader component has been deprecated. Please use the Uploader one',
      );
    }, []);

    const handleDeleteFile = fileToDelete => {
      const filteredFiles = files.filter(
        file => file.name !== fileToDelete.name,
      );

      setFiles(filteredFiles);
      onChange(filteredFiles);
    };

    const handleFileChange = inputFiles => {
      if (!validateFilesType(inputFiles, accept)) {
        onBadFormat(inputFiles, accept);
        setFiles([]);
        return;
      }

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
      setPreview([]);
      setFiles([]);
      onChange([]);
    };

    const hasPreview = !multiple && preview.length > 0;

    return (
      <StyledImageUploader
        className={cx('f-ImageUploader', className)}
        onChange={handleFileChange}
        multiple={multiple}
        hasPreview={hasPreview}
        isLoading={isLoading}
        hasError={hasError}
        overrides={{
          input: { accept },
        }}
        ref={ref}
        value={files}
        {...props}
      >
        {hasPreview && (
          <>
            <UploaderPreview
              preview={preview}
              className={'f-ImageUploader-preview'}
            />

            <PreviewHover className={'f-ImageUploader-hoverState'}>
              <IconButton onClick={handleClear} icon={Icon.ICONS.IconTrash} />
            </PreviewHover>
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
      </StyledImageUploader>
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
  onBadFormat: PropTypes.func,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      preview: PropTypes.string,
    }),
  ),
};

ImageUploader.defaultProps = {
  accept: 'image/jpeg,image.png',
  onBadFormat: () => {},
  value: [],
};

export default ImageUploader;
