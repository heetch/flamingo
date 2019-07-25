import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";
import UploaderItem from "../UploaderItem";

import { ICONS } from "../../constants";

const defaultTranslate = ({ defaultText }) => defaultText;

const texts = {
  add_document: {
    id: "flamingo-file-uploader-add-document",
    defaultText: "Add a document",
  },
  error: {
    id: "flamingo-file-uploader-error-title",
    defaultText: "Upload failed",
  },
  try_again: {
    id: "flamingo-file-uploader-error-try-again",
    defaultText: "Click here to try again",
  },
};

const FileUploader = ({
  children,
  className,
  file,
  name,
  onChange,
  translate,
  isLoading,
  isErrored,
  overrides,
  ...props
}) => {
  const [innerFile, setInnerFile] = React.useState(undefined);
  const hasFile = !!file || !!innerFile;

  const handleFileChange = e => {
    const [eventFile] = e.target.files;

    setInnerFile(eventFile);
    onChange(eventFile);
  };

  const handleResetState = () => {
    setInnerFile(undefined);
  };

  React.useEffect(
    () => {
      setInnerFile(file);
    },
    [file]
  );

  return (
    <div
      className={cx("FileUploader", className, {
        "has-file": hasFile,
      })}
      {...props}
    >
      {isLoading && (
        <div className="FileUploader-state FileUploader-state--uploading">
          <Spinner />
        </div>
      )}

      {isErrored && (
        <label
          className="FileUploader-state FileUploader-state--error"
          htmlFor={name}
        >
          <Icon icon={ICONS.IconSadFace} />

          <Text className="FileUploader-errorState-title">
            {translate(texts.error)}
          </Text>

          <Text className="FileUploader-errorState-tryAgain">
            {translate(texts.try_again)}
          </Text>
        </label>
      )}

      {!isLoading && !isErrored && (
        <>
          {hasFile ? (
            children || (
              <UploaderItem
                handleResetState={handleResetState}
                file={innerFile}
              />
            )
          ) : (
            <label
              className="FileUploader-state FileUploader-state--empty"
              htmlFor={name}
            >
              <Icon icon={ICONS.IconFilePlus} />
              <Text>{translate(texts.add_document)}</Text>
            </label>
          )}
        </>
      )}

      <div className="FileUploader-inputContainer">
        <input
          type="file"
          id={name}
          name={name}
          onChange={handleFileChange}
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
  file: PropTypes.instanceOf(File),
  isLoading: PropTypes.bool,
  isErrored: PropTypes.bool,
  overrides: PropTypes.shape({
    input: PropTypes.shape({}),
  }),
};

FileUploader.defaultProps = {
  children: undefined,
  className: undefined,
  translate: defaultTranslate,
  file: undefined,
  isErrored: false,
  isLoading: false,
  overrides: {
    input: {},
  },
};

export default FileUploader;
