import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Label = ({ className, htmlFor, ...props }) => (
  <label
    className={cx("Label", {
      [className]: className,
    })}
    htmlFor={htmlFor}
    {...props}
  />
);

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: undefined,
};

export default Label;
