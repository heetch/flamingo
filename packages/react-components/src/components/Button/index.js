import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { INTENTS } from "../../constants/";
import "./index.css";

const intents = Object.values(INTENTS);

const Button = ({ className, disabled, intent, ...props }) => (
  <button
    className={cx("Button", {
      "is-disabled": disabled,
      [`is-${intent}`]: intent,
      [className]: className,
    })}
    {...props}
  />
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  intent: INTENTS.PRIMARY,
};

export default Button;
