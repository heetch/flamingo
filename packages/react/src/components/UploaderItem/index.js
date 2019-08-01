import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import IconButton from "../IconButton";
import Text from "../Text";

import { ICONS } from "../../constants";

const UploaderItem = ({ file, handleDelete, overrides }) => (
  <div className="UploaderItem">
    <div className="UploaderItem-iconContainer">
      {overrides.icon || <Icon icon={ICONS.IconFileText} />}
    </div>

    <Text className="UploaderItem-name u-ellipsis">{file.name}</Text>
    <IconButton onClick={() => handleDelete(file)} icon={ICONS.IconTrash} />
  </div>
);

UploaderItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

UploaderItem.defaultProps = {
  overrides: {},
};

export default UploaderItem;
