import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import { ICONS } from "../../constants";

const Spinner = ({ className, ...props }) => (
  <Icon
    {...props}
    className={cx("Icon--spinner", {
      [className]: className,
    })}
    icon={ICONS.IconLoader}
  />
);

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: undefined,
};

export default Spinner;
