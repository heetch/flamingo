import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Icon } from "../";
import { ICON_SIZES } from "../../constants/";
import "./index.css";

const Select = ({
  className,
  disabled,
  id,
  invalid,
  onChange,
  options,
  valid,
  ...props
}) => (
  <div className="Select-wrapper">
    <select
      className={cx("Select", {
        "is-disabled": disabled,
        "is-invalid": invalid,
        "is-valid": valid,
        [className]: className,
      })}
      disabled={disabled}
      id={id}
      name={id}
      onChange={onChange}
      {...props}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>

    <Icon icon="IconTopDown" className="Select-icon" size={ICON_SIZES.S} />
  </div>
);

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  valid: PropTypes.bool,
};

Select.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  options: [],
  valid: false,
};

export default Select;
