import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Button from "../Button";
import Icon from "../Icon";

import { ICON_SIZES, ICONS_SVGS } from "../../constants";

const icons = Object.keys(ICONS_SVGS);

const IconButton = ({ className, icon, ...props }) => (
  <Button
    className={cx("Button--icon", {
      [className]: className,
    })}
    {...props}
  >
    <Icon icon={icon} size={ICON_SIZES.L} />
  </Button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(icons).isRequired,
};

IconButton.defaultProps = {
  className: undefined,
};

export default IconButton;
