import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import UploaderImageItem from '../UploaderImageItem';
import UploaderItem from '../UploaderItem';

import State from './State';
import { Container, InputContainer, Preview, PreviewActions } from './styles';
import { STATES } from './constants';

import { toBase64 } from '../../utils';

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

const isImage = file => /\.(jpe?g|png|gif|webp)$/i.test(file.name);

const Uploader = React.forwardRef(
  (
    {
      id,
      invalid,
      onChange,
      translate,
      multiple,
      overrides,
      state: initialState,
      valid,
      value,
      ...props
    },
    ref,
  ) => {
    const [state, setState] = React.useState(initialState);
    const [files, setFiles] = React.useState(value);
    const [preview, setPreview] = React.useState();

    const onClear = () => {
      setFiles([]);
      setPreview();
      setState(STATES.IDLE);
      onChange([]);
    };

    const onDeleteFiles = file => {
      const remainingFiles = files.filter(({ name }) => name !== file.name);

      if (remainingFiles.length === 0) {
        onClear();
        return;
      }

      setFiles(remainingFiles);
      onChange(remainingFiles);
    };

    const onFilesChange = async e => {
      const inputFiles = [...e.target.files];
      const [file] = inputFiles;
      const isSingleImage = inputFiles.length === 1 && isImage(file);

      setState(STATES.LOADING);
      onChange(inputFiles);

      if (isSingleImage) {
        setPreview(await toBase64(file));
        setState(STATES.SINGLE_IMAGE);
        return;
      }

      setFiles([...files, ...inputFiles]);
      setState(STATES.FILES);
    };

    React.useEffect(() => {
      const [file] = value;
      const filesCount = value.length;

      if (filesCount === 0) return;
      if (filesCount === 1 && file.preview) {
        setPreview(file.preview);
        setState(STATES.SINGLE_IMAGE);
        return;
      }

      setState(STATES.FILES);
    }, [value]);

    const actionableStateProps = {
      as: 'label',
      htmlFor: id,
    };

    return (
      <Container ref={ref} state={state} invalid={invalid} valid={valid}>
        {state === STATES.IDLE && (
          <State icon={Icon.ICONS.IconFilePlus} {...actionableStateProps}>
            {translate(texts.add_document)}
          </State>
        )}

        {state === STATES.LOADING && (
          <State>
            <Spinner size={Icon.SIZES.L} />
            {translate(texts.uploading)}
          </State>
        )}

        {state === STATES.ERROR && (
          <State icon={Icon.ICONS.IconSadFace} {...actionableStateProps}>
            {translate(texts.error)}
          </State>
        )}

        {state === STATES.SINGLE_IMAGE && (
          <>
            <Preview preview={preview} />
            <PreviewActions>
              <IconButton onClick={onClear} icon={IconButton.ICONS.IconTrash} />
            </PreviewActions>
          </>
        )}

        {state === STATES.FILES && (
          <>
            {files.map(file =>
              isImage(file) ? (
                <UploaderImageItem
                  key={file.name}
                  handleDelete={onDeleteFiles}
                  file={file}
                />
              ) : (
                <UploaderItem
                  key={file.name}
                  handleDelete={onDeleteFiles}
                  file={file}
                />
              ),
            )}

            {multiple && (
              <State {...actionableStateProps}>
                {translate(texts.upload_more_files)}
              </State>
            )}
          </>
        )}

        <InputContainer>
          <input
            className='f-Uploader-input'
            type='file'
            id={id}
            name={id}
            multiple={multiple}
            onChange={onFilesChange}
            value=''
            {...props}
          />
        </InputContainer>
      </Container>
    );
  },
);

Uploader.displayName = 'Uploader';

Uploader.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func,
  isLoading: PropTypes.bool,
  invalid: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  overrides: PropTypes.shape(),
  state: PropTypes.oneOf(Object.values(STATES)),
  valid: PropTypes.bool,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

Uploader.defaultProps = {
  translate: ({ defaultText }) => defaultText,
  overrides: {},
  state: STATES.IDLE,
  value: [],
};

Uploader.STATES = STATES;

export default Uploader;
