import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import { ICON_SIZES } from "../../constants";

const defaultIconProps = {
  className: "FormEl-icon",
  size: ICON_SIZES.S,
};

const Textarea = ({
  className,
  disabled: isDisabled,
  fill: isFilled,
  id,
  invalid: isInvalid,
  onChange,
  placeholder,
  valid: isValid,
  ...props
}) => {
  const classes = {
    "is-disabled": isDisabled,
    "is-filled": isFilled,
    "is-valid": isValid,
    "is-invalid": isInvalid,
  };

  return (
    <div className={cx("FormEl-wrapper", "Textarea-wrapper", { ...classes })}>
      <textarea
        className={cx("FormEl", "Textarea", className, { ...classes })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      {isInvalid && <Icon icon="IconClose" {...defaultIconProps} />}
      {isValid && <Icon icon="IconCheck" {...defaultIconProps} />}
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

Textarea.defaultProps = {
  className: undefined,
  disabled: false,
  fill: false,
  invalid: false,
  placeholder: "",
  valid: false,
};

export default Textarea;
