import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner";
import UploaderItem from "../UploaderItem";

import { toBase64 } from "../../utils";
import { refShapes } from "../../constants";

const UploaderImageItem = ({ file, forwardedRef, overrides, ...props }) => {
  const [preview, setPreview] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const icon = isLoading ? <Spinner /> : <img src={preview} alt={file.name} />;

  React.useEffect(() => {
    toBase64(file).then(base64 => {
      setPreview(base64);
      setIsLoading(false);
    });
  }, [file]);

  return (
    <UploaderItem
      overrides={{ icon, ...overrides }}
      file={file}
      ref={forwardedRef}
      {...props}
    />
  );
};

UploaderImageItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  forwardedRef: PropTypes.oneOfType(refShapes),
  overrides: PropTypes.shape({}),
};

UploaderImageItem.defaultProps = {
  forwardedRef: undefined,
  overrides: {},
};

export default UploaderImageItem;
