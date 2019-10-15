import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FileUploader from '../FileUploader';
import IconButton from '../IconButton';
import UploaderImageItem from '../UploaderImageItem';

import { ICONS, refShapes } from '../../constants';
import { toBase64, safeInvoke } from '../../utils';

const ImageUploader = ({ forwardedRef, multiple, onChange, ...props }) => {
  const [files, setFiles] = React.useState([]);
  const [preview, setPreview] = React.useState(undefined);

  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleDeleteFile = fileToDelete => {
    const filteredFiles = files.filter(file => file.name !== fileToDelete.name);
    setFiles(filteredFiles);
  };

  const handleFileChange = inputFiles => {
    const nextFiles = multiple ? [...files, ...inputFiles] : inputFiles;

    setFiles(nextFiles);

    if (multiple) {
      return;
    }

    setIsLoading(true);

    toBase64(inputFiles[0])
      .then(base64 => {
        setPreview(base64);
        setIsLoading(false);
        safeInvoke(onChange, { files, base64 });
      })
      .catch(setHasError);
  };

  const handleClear = () => {
    setPreview(undefined);
    setFiles([]);
  };

  return (
    <FileUploader
      className={cx('ImageUploader', {
        'has-preview': preview,
        'is-loading': isLoading,
      })}
      files={files}
      onChange={handleFileChange}
      multiple={multiple}
      isLoading={isLoading}
      hasError={hasError}
      overrides={{
        input: {
          accept: 'image/*',
        },
      }}
      ref={forwardedRef}
      {...props}
    >
      {preview && (
        <>
          <div
            className='ImageUploader-preview'
            style={{
              backgroundImage: `url(${preview})`,
            }}
          />

          <div className='ImageUploader-hoverState'>
            <IconButton onClick={handleClear} icon={ICONS.IconTrash} />
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
};

ImageUploader.propTypes = {
  forwardedRef: PropTypes.oneOfType(refShapes),
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ImageUploader.defaultProps = {
  forwardedRef: undefined,
  multiple: false,
};

export default ImageUploader;
