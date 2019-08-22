import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { safeInvoke } from "../../utils";

const Toggle = ({ checked, disabled, label, helper, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    safeInvoke(onChange, newState);
  };

  return (
    <div
      className={cx("ToggleContainer", {
        "is-on": isOn,
        "is-disabled": disabled,
      })}
    >
      <div className="Toggle" onClick={!disabled ? handleToggle : undefined}>
        <div className="Toggle-bullet" />
        <span className="Toggle-bullet-label Toggle-bullet-label--on">ON</span>
        <span className="Toggle-bullet-label Toggle-bullet-label--off">
          OFF
        </span>
      </div>
      {(label || helper) && (
        <div
          className="Toggle-labels"
          onClick={!disabled ? handleToggle : undefined}
        >
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
