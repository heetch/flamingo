import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import { ICON_SIZES } from "../../constants/";

const Select = ({ className, disabled, id, onChange, options, ...props }) => (
  <div className="FormEl-wrapper Select-wrapper">
    <select
      className={cx("FormEl", "Select", {
        "is-disabled": disabled,
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

    <Icon icon="IconTopDown" className="FormEl-icon" size={ICON_SIZES.S} />
  </div>
);

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

Select.defaultProps = {
  className: undefined,
  disabled: false,
  options: [],
};

export default Select;
