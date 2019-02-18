import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import { ICON_SIZES } from "../../constants/";

const Select = ({
  className,
  disabled: isDisabled,
  fill: isFilled,
  id,
  onChange,
  options,
  ...props
}) => {
  const classes = {
    "is-disabled": isDisabled,
    "is-filled": isFilled,
  };

  return (
    <div className={cx("FormEl-wrapper Select-wrapper", { ...classes })}>
      <select
        className={cx("FormEl", "Select", {
          ...classes,
          [className]: className,
        })}
        disabled={isDisabled}
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
};

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
