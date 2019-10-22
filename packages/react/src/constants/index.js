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

export const UI_TYPES = {
  h1: 'heading-1',
  h2: 'heading-2',
  h3: 'heading-3',
  h4: 'heading-4',
  h5: 'heading-5',
  h6: 'heading-6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
};

export const refShapes = [
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
];
