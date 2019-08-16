import React, { useState } from "react";
import PropTypes from "prop-types";
import { safeInvoke } from "../../utils";
import cx from "classnames";

const Checkbox = ({
  isUndefined,
  disabled,
  children,
  checked: isDefaultChecked,
  helper,
  name,
  value,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(isDefaultChecked);

  const onCheckboxStateChange = e => {
    const { checked } = e.target;
    setIsChecked(checked);
    safeInvoke(onChange(e));
  };

  const buildInputTag = () => (
    <input
      checked={isChecked}
      disabled={disabled}
      className={cx("Checkbox", { "is-undefined": !isChecked && isUndefined })}
      type="checkbox"
      name={name}
      value={value}
      onChange={onCheckboxStateChange}
    />
  );

  return children ? (
    <label className="Checkbox-label">
      {buildInputTag()}
      <div>
        {children}
        {helper && <p className="Checkbox-helper">{helper}</p>}
      </div>
    </label>
  ) : (
    buildInputTag()
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  isUndefined: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  helper: PropTypes.string,
};

Checkbox.defaultProps = {
  isUndefined: false,
  checked: false,
  disabled: false,
  children: undefined,
  value: "checked",
  helper: undefined,
};

export default Checkbox;
