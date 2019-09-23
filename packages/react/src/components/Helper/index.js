import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UI from "../UI";

const Helper = ({ className, children, ...props }) => (
  <UI
    as="small"
    type={UI.TYPES.SubContent}
    className={cx("Helper", className)}
    {...props}
  >
    {children}
  </UI>
);

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
