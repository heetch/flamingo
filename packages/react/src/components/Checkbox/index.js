import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Checkbox = ({
  isUndefined,
  disabled,
  children,
  isChecked: isDefaultChecked,
  sublabel,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(isDefaultChecked);

  const onCheckboxStateChange = e => {
    const { checked } = e.target;
    setIsChecked(checked);
    onChange && onChange(e);
  };

  const buildInputTag = () => (
    <input
      checked={isChecked}
      disabled={disabled}
      className={cx("Checkbox", { "is-undefined": isUndefined })}
      type="checkbox"
      onChange={onCheckboxStateChange}
    />
  );

  return children ? (
    <label className="Checkbox-label">
      {buildInputTag()}
      <div>
        {children}
        {sublabel && <p className="Checkbox-sublabel">{sublabel}</p>}
      </div>
    </label>
  ) : (
    buildInputTag()
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  isUndefined: PropTypes.bool,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

Checkbox.defaultProps = {
  onChange: undefined,
  isUndefined: false,
  isChecked: false,
  disabled: false,
  children: undefined,
};

export default Checkbox;
