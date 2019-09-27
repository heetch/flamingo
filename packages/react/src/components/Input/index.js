import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import UI from "../UI";

import { ICONS, INPUT_TYPES } from "../../constants";

const types = Object.values(INPUT_TYPES);

const defaultIconProps = {
  className: "FormEl-icon",
};

const Input = ({
  className,
  disabled: isDisabled,
  id,
  invalid: isInvalid,
  onChange,
  placeholder,
  type,
  valid: isValid,
  ...props
}) => {
  const classes = {
    "is-disabled": isDisabled,
    "is-valid": isValid,
    "is-invalid": isInvalid,
  };

  return (
    <div className={cx("FormEl-wrapper", "Input-wrapper", { ...classes })}>
      <UI
        as="input"
        type={UI.TYPES.Content}
        className={cx("FormEl", "Input", className, {
          ...classes,
          "FormEl--withIcon": isValid || isInvalid,
        })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      {isInvalid && (
        <Icon icon={ICONS.IconAlertOctagon} {...defaultIconProps} />
      )}

      {isValid && <Icon icon={ICONS.IconCheck} {...defaultIconProps} />}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(types),
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  placeholder: "",
  type: INPUT_TYPES.TEXT,
  valid: false,
};

export default Input;
