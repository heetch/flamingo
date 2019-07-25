import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Text from "../Text";

const Helper = ({ className, children, ...props }) => (
  <small className={cx("Helper", className)} {...props}>
    <Text>{children}</Text>
  </small>
);

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
