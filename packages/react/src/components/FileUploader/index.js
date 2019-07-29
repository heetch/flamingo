import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";
import UploaderItem from "../UploaderItem";

import { ICONS } from "../../constants";
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
};

const FileUploader = ({
  children,
  className,
  file,
  name,
  onChange,
  translate,
  isLoading,
  hasError,
  overrides,
  ...props
}) => {
  const [innerFile, setInnerFile] = React.useState(undefined);
  const hasFile = !isLoading && (file || innerFile);

  const handleFileChange = e => {
    const [eventFile] = e.target.files;

    setInnerFile(eventFile);
    safeInvoke(onChange(eventFile));
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
      className={cx("FileUploader FormEl-wrapper", className, {
        "has-file": hasFile,
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

      {!isLoading && !hasError && (
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
              <Text className="FileUploader-actionText">
                {translate(texts.add_document)}
              </Text>
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
  hasError: PropTypes.bool,
  overrides: PropTypes.shape({
    input: PropTypes.shape({}),
  }),
};

FileUploader.defaultProps = {
  children: undefined,
  className: undefined,
  translate: defaultTranslate,
  file: undefined,
  hasError: false,
  isLoading: false,
  overrides: {
    input: {},
  },
};

export default FileUploader;
