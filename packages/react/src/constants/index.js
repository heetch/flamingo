import PropTypes from 'prop-types';

export const INPUT_TYPES = {
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  SEARCH: 'search',
  TEL: 'tel',
  TEXT: 'text',
};

export const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

export const refShapes = [
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
];
