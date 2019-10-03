import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { HEADING_LEVELS } from '../../constants';

const levels = Object.keys(HEADING_LEVELS);

const Heading = ({ as: Component, className, ...props }) => (
  <Component
    className={cx('Heading', `Heading--${Component}`, className)}
    {...props}
  />
);

Heading.propTypes = {
  as: PropTypes.oneOf(levels),
  className: PropTypes.string,
};

Heading.defaultProps = {
  as: HEADING_LEVELS.h1,
  className: undefined,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
