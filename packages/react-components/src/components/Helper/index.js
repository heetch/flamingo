import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Text } from "../";

const Helper = ({ className, children, ...props }) => (
  <small
    className={cx("Helper", {
      [className]: className,
    })}
    {...props}
  >
    <Text>{children}</Text>
  </small>
);

Helper.propTypes = {
  className: PropTypes.string,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
