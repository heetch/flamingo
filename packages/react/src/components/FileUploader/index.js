import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import Spinner from '../Spinner';
import UiText from '../UiText';
import UploaderItem from '../UploaderItem';

import { safeInvoke } from '../../utils';

const defaultTranslate = ({ defaultText }) => defaultText;

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
      files: filesProp,
      name,
      onChange,
      translate,
      isLoading,
      hasError,
      multiple,
      overrides,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = React.useState(filesProp);
    const hasFile = !isLoading && !hasError && files.length > 0;

    const handleFilesChange = e => {
      const inputFiles = [...e.target.files];
      const nextFiles = multiple ? [...files, ...inputFiles] : inputFiles;

      setFiles(nextFiles);
      safeInvoke(onChange, inputFiles);
    };

    const handleDeleteFile = fileToDelete => {
      const remainingFiles = files.filter(
        file => file.name !== fileToDelete.name,
      );
      setFiles(remainingFiles);
    };

    React.useEffect(() => {
      setFiles(filesProp);
    }, [filesProp]);

    return (
      <div
        className={cx('FileUploader FormEl-wrapper', className, {
          'has-file': hasFile,
          'has-error': hasError,
          'is-empty': !hasFile,
          'is-loading': isLoading,
        })}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <UiText
            className='FileUploader-state FileUploader-state--uploading'
            type={UiText.TYPES.subContentBold}
            as='div'
          >
            <Spinner size={iconSize} />
            {translate(texts.uploading)}
          </UiText>
        )}

        {hasError && (
          <UiText
            className='FileUploader-label FileUploader-state FileUploader-state--error'
            type={UiText.TYPES.subContentBold}
            as='label'
            htmlFor={name}
          >
            <Icon icon={Icon.ICONS.IconSadFace} size={iconSize} />
            {translate(texts.error)}
          </UiText>
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
                <UiText
                  className='FileUploader-label FileUploader-state FileUploader-state--addFiles'
                  type={UiText.TYPES.subContentBold}
                  as='label'
                  htmlFor={name}
                >
                  {translate(texts.upload_more_files)}
                </UiText>
              )}
            </>
          ) : (
            <UiText
              type={UiText.TYPES.subContentBold}
              as='label'
              className='FileUploader-label FileUploader-state FileUploader-state--empty'
              htmlFor={name}
            >
              <Icon icon={Icon.ICONS.IconFilePlus} size={iconSize} />
              {translate(texts.add_document)}
            </UiText>
          ))}

        <div className='FileUploader-inputContainer'>
          <input
            type='file'
            id={name}
            name={name}
            multiple={multiple}
            onChange={handleFilesChange}
            {...overrides.input}
          />
        </div>
      </div>
    );
  },
);

FileUploader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func,
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  overrides: PropTypes.shape({
    input: PropTypes.shape({}),
  }),
};

FileUploader.defaultProps = {
  children: undefined,
  className: undefined,
  translate: defaultTranslate,
  files: [],
  hasError: false,
  isLoading: false,
  multiple: false,
  overrides: {
    input: {},
  },
};

export default FileUploader;
