import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./index.css";

const Text = ({ as: Component, className, ...props }) => (
  <Component
    className={cx("Text", `Text--${Component}`, {
      [className]: className,
    })}
    {...props}
  />
);

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  as: "p",
  className: undefined,
};

export default Text;
