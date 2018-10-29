import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ICONS } from "../../constants";
import "./index.css";

const icons = Object.keys(ICONS);

const Icon = ({ className, children, icon, width, height, ...props }) => (
  <span
    className={cx("Icon", {
      [className]: className,
    })}
    {...props}
  >
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {ICONS[icon]}
    </svg>
  </span>
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(icons).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  className: undefined,
  width: 20,
  height: 20,
};

export default Icon;
