import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { INPUT_TYPES } from "../../constants/";
import "./index.css";

const types = Object.values(INPUT_TYPES);

const Input = ({
  className,
  disabled,
  id,
  onChange,
  placeholder,
  type,
  ...props
}) => (
  <input
    className={cx("Input", {
      "is-disabled": disabled,
      [className]: className,
    })}
    disabled={disabled}
    id={id}
    name={id}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    {...props}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(types),
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  placeholder: "",
  type: "text",
};

export default Input;
