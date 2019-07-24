import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import IconButton from "../IconButton";
import Text from "../Text";

import { ICONS } from "../../constants";

const UploaderItem = ({ file, handleResetState }) => (
  <div className="UploaderItem">
    <div className="UploaderItem-iconContainer">
      <Icon icon={ICONS.IconFileText} />
    </div>

    <Text className="UploaderItem-name">{file.name}</Text>
    <IconButton onClick={handleResetState} icon={ICONS.IconTrash} />
  </div>
);

UploaderItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  handleResetState: PropTypes.func.isRequired,
};

export default UploaderItem;
