import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { UI_TYPES } from "../../constants";

const types = Object.keys(UI_TYPES);

const UI = ({ as: Component, className, type, ...props }) => (
  <Component
    className={cx("UI", `UI--${UI_TYPES[type]}`, className)}
    {...props}
  />
);

UI.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
};

UI.defaultProps = {
  as: "p",
  className: undefined,
  type: UI_TYPES.Content,
};

export default UI;
