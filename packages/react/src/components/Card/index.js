import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const ELEVATIONS = [0, 1, 2];

const Card = ({ className, elevation, isSelected, ...props }) => (
  <div
    className={cx("Card", className, {
      "is-selected": isSelected,
      [`is-elevated--${elevation}`]: elevation,
    })}
    {...props}
  />
);

Card.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.oneOf(ELEVATIONS),
  isSelected: PropTypes.bool,
};

Card.defaultProps = {
  className: undefined,
  elevation: 0,
  isSelected: false,
};

Card.ELEVATIONS = ELEVATIONS;

export default Card;
