import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UiText from "../UiText";

const Text = ({ as: Component, className, isNumber, ...props }) => (
  <UiText
    type={UiText.TYPES.content}
    as={Component}
    className={cx("Text", `Text--${Component}`, className, {
      "is-number": isNumber,
    })}
    {...props}
  />
);

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  isNumber: PropTypes.bool,
};

Text.defaultProps = {
  as: "p",
  className: undefined,
  isNumber: false,
};

export default Text;
