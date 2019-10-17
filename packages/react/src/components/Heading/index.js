import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const Heading = ({ as, className, ...props }) => (
  <UiText
    as={`h${as}`}
    type={`h${as}`}
    className={cx('Heading', `heading--${as}`, className)}
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
