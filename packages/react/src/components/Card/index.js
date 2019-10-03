import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CARD_ELEVATIONS, CARD_SIZES } from '../../constants';

const sizes = Object.values(CARD_SIZES);

const Card = ({ className, elevation, isSelected, size, ...props }) => (
  <div
    className={cx('Card', `Card--${size}`, className, {
      'is-selected': isSelected,
      [`is-elevated--${elevation}`]: elevation,
    })}
    {...props}
  />
);

Card.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.oneOf(CARD_ELEVATIONS),
  isSelected: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

Card.defaultProps = {
  className: undefined,
  elevation: 0,
  isSelected: false,
  size: CARD_SIZES.M,
};

Card.ELEVATIONS = CARD_ELEVATIONS;
Card.SIZES = CARD_SIZES;

export default Card;
