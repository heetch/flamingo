import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import UI from "../UI";
import { HEADING_LEVELS } from "../../constants";

const Heading = ({ as, className, ...props }) => (
  <UI
    as={`h${as}`}
    type={`heading-${as}`}
    className={cx("Heading", `heading--${as}`, className)}
    {...props}
  />
);

Heading.propTypes = {
  as: PropTypes.oneOf(HEADING_LEVELS),
  className: PropTypes.string,
};

Heading.defaultProps = {
  as: 1,
  className: undefined,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
