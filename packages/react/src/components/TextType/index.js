import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { TEXT_TYPES, refShapes } from "../../constants";

const types = Object.keys(TEXT_TYPES);

const TextType = ({
  as: Component,
  className,
  forwardedRef,
  type,
  ...props
}) => (
  <Component
    className={cx("TextType", `TextType--${TEXT_TYPES[type]}`, className)}
    ref={forwardedRef}
    {...props}
  />
);

TextType.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  type: PropTypes.oneOf(types),
};

TextType.defaultProps = {
  as: "p",
  className: undefined,
  forwardedRef: undefined,
  type: TEXT_TYPES.content,
};

TextType.TYPES = TEXT_TYPES;

export default TextType;
