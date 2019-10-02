import React from "react";
import PropTypes from "prop-types";

const Radio = ({
  disabled,
  children,
  checked,
  helper,
  name,
  value,
  onChange,
}) => {
  const buildInputTag = () => (
    <input
      defaultChecked={checked}
      disabled={disabled}
      className="Radio"
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  return children ? (
    <label className="Radio-label">
      {buildInputTag()}
      <div>
        {children}
        {helper && <p className="Radio-helper">{helper}</p>}
      </div>
    </label>
  ) : (
    buildInputTag()
  );
};

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  children: undefined,
  helper: undefined,
};

export default Radio;
