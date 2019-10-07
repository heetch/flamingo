import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UiText from "../UiText";

const Helper = ({ className, children, ...props }) => (
  <UiText
    as="small"
    type={UiText.TYPES.subContent}
    className={cx("Helper", className)}
    {...props}
  >
    {children}
  </UiText>
);

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
