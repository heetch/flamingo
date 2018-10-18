import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { INTENTS } from "../../constants/";
import "./index.css";

const intents = Object.values(INTENTS);

const Button = ({ className, intent, ...props }) => (
  <button
    className={cx("Button", {
      [`is-${intent}`]: intent,
      [className]: className,
    })}
    {...props}
  />
);

Button.propTypes = {
  className: PropTypes.string,
  intent: PropTypes.oneOf(intents),
};

Button.defaultProps = {
  className: null,
  intent: INTENTS.PRIMARY,
};

export default Button;
