import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Button from "../Button";
import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";
import UploaderItem from "../UploaderItem";

import { ICONS, INTENTS } from "../../constants";
import { safeInvoke } from "../../utils";

const defaultTranslate = ({ defaultText }) => defaultText;

const texts = {
  add_document: {
    id: "flamingo-file-uploader-add-document",
    defaultText: "Click here to add a document",
  },
  error: {
    id: "flamingo-file-uploader-error-title",
    defaultText: "Upload failed",
  },
  try_again: {
    id: "flamingo-file-uploader-error-try-again",
    defaultText: "Click here to try again",
  },
  upload_more_files: {
    id: "flamingo-file-uploader-upload-more-files",
    defaultText: "Add more files",
  },
};

const FileUploader = ({
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
}) => {
  const [files, setFiles] = React.useState(filesProp);
  const hasFile = !isLoading && !hasError && files.length > 0;

  const handleFilesChange = e => {
    const inputFiles = [...e.target.files];
    const nextFiles = multiple ? [...files, ...inputFiles] : inputFiles;

    setFiles(nextFiles);
    safeInvoke(onChange(inputFiles));
  };

  const handleDeleteFile = fileToDelete => {
    const remainingFiles = files.filter(
      file => file.name !== fileToDelete.name
    );
    setFiles(remainingFiles);
  };

  React.useEffect(
    () => {
      setFiles(filesProp);
    },
    [filesProp]
  );

  return (
    <div
      className={cx("FileUploader FormEl-wrapper", className, {
        "has-file": hasFile,
        "has-error": hasError,
        "is-loading": isLoading,
      })}
      {...props}
    >
      {isLoading && (
        <div className="FileUploader-state FileUploader-state--uploading">
          <Spinner />
        </div>
      )}

      {hasError && (
        <label
          className="FileUploader-state FileUploader-state--error"
          htmlFor={name}
        >
          <Icon icon={ICONS.IconSadFace} />

          <Text className="FileUploader-errorState-title">
            {translate(texts.error)}
          </Text>

          <Text className="FileUploader-actionText">
            {translate(texts.try_again)}
          </Text>
        </label>
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
              <Button intent={INTENTS.TERTIARY} className="Button--label">
                <label
                  className="FileUploader-state FileUploader-state--empty"
                  htmlFor={name}
                >
                  {translate(texts.upload_more_files)}
                </label>
              </Button>
            )}
          </>
        ) : (
          <label
            className="FileUploader-state FileUploader-state--empty"
            htmlFor={name}
          >
            <Icon icon={ICONS.IconFilePlus} />
            <Text className="FileUploader-actionText">
              {translate(texts.add_document)}
            </Text>
          </label>
        ))}

      <div className="FileUploader-inputContainer">
        <input
          type="file"
          id={name}
          name={name}
          multiple={multiple}
          onChange={handleFilesChange}
          {...overrides.input}
        />
      </div>
    </div>
  );
};

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
