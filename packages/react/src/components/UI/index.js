import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { UI_TYPES, refShapes } from "../../constants";

const types = Object.keys(UI_TYPES);

const UI = ({ as: Component, className, forwardedRef, type, ...props }) => (
  <Component
    className={cx("UI", `UI--${UI_TYPES[type]}`, className)}
    ref={forwardedRef}
    {...props}
  />
);

UI.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  type: PropTypes.oneOf(types),
};

UI.defaultProps = {
  as: "p",
  className: undefined,
  forwardedRef: undefined,
  type: UI_TYPES.Content,
};

UI.TYPES = UI_TYPES;

export default UI;
