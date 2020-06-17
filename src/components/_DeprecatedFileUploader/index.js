import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import Spinner from '../Spinner';
import UploaderItem from '../UploaderItem';
import { StyledFileUploader, FileUploaderLabel } from './styles';

const texts = {
  add_document: {
    id: 'flamingo.file-uploader.add-document',
    defaultText: 'Click to add a document',
  },
  error: {
    id: 'flamingo.file-uploader.error-title',
    defaultText: 'Upload failed... Click to try again',
  },
  upload_more_files: {
    id: 'flamingo.file-uploader.upload-more-files',
    defaultText: 'Add more files',
  },
  uploading: {
    id: 'flamingo.file-uploader.uploading',
    defaultText: 'Uploading...',
  },
};

const iconSize = Icon.SIZES.L;

const FileUploader = React.forwardRef(
  (
    {
      children,
      className,
      id,
      onChange,
      translate,
      isLoading,
      hasError,
      multiple,
      overrides,
      value,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = React.useState(value);
    const hasFile = !isLoading && !hasError && files.length > 0;

    const handleFilesChange = e => {
      const inputFiles = [...e.target.files];
      const nextFiles = multiple ? [...files, ...inputFiles] : inputFiles;

      setFiles(nextFiles);
      onChange(inputFiles);
    };

    const handleDeleteFile = fileToDelete => {
      const remainingFiles = files.filter(
        file => file.name !== fileToDelete.name,
      );

      setFiles(remainingFiles);
      onChange(remainingFiles);
    };

    // keep files in sync with value when changed on image uploader
    React.useEffect(() => {
      console.warn(
        '[@heetch/flamingo] The FileUploader component has been deprecated. Please use the Uploader one',
      );

      setFiles(value);
    }, [value]);

    return (
      <StyledFileUploader
        hasFile={hasFile}
        hasError={hasError}
        className={cx('f-FileUploader', className)}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <FileUploaderLabel
            className='f-FileUploader-label f-FileUploader-state--uploading'
            withIcon
            as='div'
          >
            <Spinner size={iconSize} />
            {translate(texts.uploading)}
          </FileUploaderLabel>
        )}

        {hasError && (
          <FileUploaderLabel
            className='f-FileUploader-state--error'
            withIcon
            htmlFor={id}
          >
            <Icon icon={Icon.ICONS.IconSadFace} size={iconSize} />
            {translate(texts.error)}
          </FileUploaderLabel>
        )}

        {!isLoading &&
          !hasError &&
          (hasFile ? (
            <>
              {children ||
                files.map(file => (
                  <UploaderItem
                    key={file.name}
                    handleDelete={handleDeleteFile}
                    file={file}
                  />
                ))}

              {multiple && (
                <FileUploaderLabel
                  className='f-FileUploader-state--addFiles'
                  htmlFor={id}
                >
                  {translate(texts.upload_more_files)}
                </FileUploaderLabel>
              )}
            </>
          ) : (
            <FileUploaderLabel
              className='f-FileUploader-state--empty'
              withIcon
              htmlFor={id}
            >
              <Icon icon={Icon.ICONS.IconFilePlus} size={iconSize} />
              {translate(texts.add_document)}
            </FileUploaderLabel>
          ))}

        <div className='f-FileUploader-inputContainer'>
          <input
            className='f-FileUploader-input'
            type='file'
            id={id}
            name={id}
            multiple={multiple}
            onChange={handleFilesChange}
            value=''
            {...overrides.input}
          />
        </div>
      </StyledFileUploader>
    );
  },
);

FileUploader.displayName = 'FileUploader';

FileUploader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func,
  isLoading: PropTypes.bool,
  invalid: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  overrides: PropTypes.shape({
    input: PropTypes.shape({}),
  }),
  valid: PropTypes.bool,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

FileUploader.defaultProps = {
  translate: ({ defaultText }) => defaultText,
  overrides: {
    input: {},
  },
  value: [],
};

export default FileUploader;
