import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ICON_SIZES, ICONS } from "../../constants";
import "./index.css";

const icons = Object.keys(ICONS);
const sizes = Object.values(ICON_SIZES);

const Icon = ({ className, icon, size, ...props }) => (
  <i
    className={cx("Icon", `Icon--${size}`, {
      [className]: className,
    })}
    {...props}
  >
    {ICONS[icon]}
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(icons).isRequired,
  size: PropTypes.oneOf(sizes),
};

Icon.defaultProps = {
  className: undefined,
  size: ICON_SIZES.M,
};

export default Icon;
