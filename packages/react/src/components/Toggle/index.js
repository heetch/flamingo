import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { safeInvoke } from "../../utils";

const Toggle = ({ checked, disabled, label, helper, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    safeInvoke(onChange(newState));
  };

  return (
    <div className="ToggleContainer">
      <div
        className={cx("Toggle", { "is-active": isOn, "is-disabled": disabled })}
        onClick={handleToggle}
      >
        <div className="Toggle--bullet" />
      </div>
      {(label || helper) && (
        <div>
          {label}
          {helper && <p className="Toggle-helper">{helper}</p>}
        </div>
      )}
    </div>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  helper: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  label: null,
  helper: null,
};

export default Toggle;
