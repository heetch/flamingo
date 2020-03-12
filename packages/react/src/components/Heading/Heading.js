import React from 'react';
import PropTypes from 'prop-types';

import UiText from '../UiText/UiText';
import { LEVELS } from './Heading.constants';

const Heading = ({ as, level, ...props }) => (
  <UiText as={as || `h${level}`} variant={`H${level}`} {...props} />
);

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: PropTypes.node,
  level: PropTypes.oneOf(LEVELS),
};

Heading.defaultProps = {
  as: undefined,
  level: 1,
};

Heading.LEVELS = LEVELS;

export default Heading;
