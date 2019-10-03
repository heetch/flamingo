import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import TextType from "../TextType";

const Helper = ({ className, children, ...props }) => (
  <TextType
    as="small"
    type={TextType.TYPES.subContent}
    className={cx("Helper", className)}
    {...props}
  >
    {children}
  </TextType>
);

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
