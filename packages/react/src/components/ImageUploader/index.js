import React from "react";
import PropTypes from "prop-types";

import FileUploader from "../FileUploader";
import IconButton from "../IconButton";

import { ICONS } from "../../constants";

const { STATES } = FileUploader;

const toBase64 = file => {
  const reader = new FileReader();

  return new Promise(resolve => {
    reader.onload = ({ target }) => resolve(target.result);
    reader.readAsDataURL(file);
  });
};

const ImageUploader = ({ onChange, ...props }) => {
  const [uploaderState, setUploaderState] = React.useState(STATES.DEFAULT);
  const [file, setFile] = React.useState(undefined);
  const [preview, setPreview] = React.useState(undefined);

  const setDefaultState = () => setUploaderState(STATES.DEFAULT);
  const setLoadingState = () => setUploaderState(STATES.LOADING);
  const setSuccessState = () => setUploaderState(STATES.SUCCESS);

  const handleFileChange = e => {
    const { files } = e.target;

    if (files.length === 0) {
      setDefaultState();
      setFile(undefined);
      setPreview(undefined);
    }

    setFile(files[0]);
  };

  const handleResetState = () => {
    setFile(undefined);
    setPreview(undefined);
    setDefaultState();
  };

  React.useEffect(
    () => {
      if (file) {
        setLoadingState();
        toBase64(file).then(data => {
          setPreview(data);
          setSuccessState();
        });
      }
    },
    [file]
  );

  return (
    <FileUploader state={uploaderState} onChange={handleFileChange} {...props}>
      {preview && (
        <>
          <div
            className="ImageUploader-preview"
            style={{
              backgroundImage: `url(${preview})`,
            }}
          />
          <div className="ImageUploader-hoverState">
            <IconButton onClick={handleResetState} icon={ICONS.IconArrowDown} />
          </div>
        </>
      )}
    </FileUploader>
  );
};

ImageUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUploader;
