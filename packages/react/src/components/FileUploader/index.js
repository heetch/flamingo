import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Text from "../Text";

import { ICONS } from "../../constants";

const defaultTranslate = ({ defaultText }) => defaultText;

const texts = {
  add_document: {
    id: "flamingo-file-uploader-add-document",
    defaultText: "Add a document",
  },
  uploading: {
    id: "flamingo-file-uploader-uploading",
    defaultText: "Uploading...",
  },
  error: {
    id: "flamingo-file-uploader-error-title",
    defaultText: "An error just happened",
  },
  try_again: {
    id: "flamingo-file-uploader-error-try-again",
    defaultText: "Please try again",
  },
};

const STATES = {
  DEFAULT: "default",
  ERRORED: "errored",
  LOADING: "loading",
  SUCCESS: "success",
};

const FileUploader = ({
  children,
  name,
  onChange,
  state,
  translate,
  ...props
}) => (
  <div className="FileUploader" {...props}>
    {state === STATES.DEFAULT && (
      <label
        className="FileUploader-state FileUploader-state--empty"
        htmlFor={name}
      >
        <Icon icon={ICONS.IconAdd} />
        <Text>{translate(texts.add_document)}</Text>
      </label>
    )}

    {state === STATES.LOADING && (
      <div className="FileUploader-state FileUploader-state--uploading">
        <Text>{translate(texts.uploading)}</Text>
      </div>
    )}

    {state === STATES.ERRORED && (
      <div className="FileUploader-state FileUploader-state--error">
        <Text className="FileUploader-errorState-title">
          {translate(texts.error)}
        </Text>

        <Text className="FileUploader-errorState-tryAgain">
          {translate(texts.try_again)}
        </Text>
      </div>
    )}

    {state === STATES.SUCCESS && (
      <div className="FileUploader-state FileUploader-state--success">
        <Text>Success state, wait for Juanito for more details</Text>
      </div>
    )}

    {children}

    <div className="FileUploader-inputContainer">
      <input type="file" id={name} name={name} onChange={onChange} />
    </div>
  </div>
);

FileUploader.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.oneOf(Object.values(STATES)),
  translate: PropTypes.func,
};

FileUploader.defaultProps = {
  children: undefined,
  state: STATES.DEFAULT,
  translate: defaultTranslate,
};

FileUploader.STATES = STATES;

export default FileUploader;
