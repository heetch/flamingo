import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const Heading = React.forwardRef(({ as, className, level, ...props }, ref) => (
  <UiText
    as={as || `h${level}`}
    level={level}
    variant={`h${level}`}
    className={cx('Heading', `Heading--${level}`, className)}
    ref={ref}
    {...props}
  />
));

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS),
};

Heading.defaultProps = {
  as: undefined,
  className: undefined,
  level: 1,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
