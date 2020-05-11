import React from 'react';
import PropTypes from 'prop-types';
import * as Chakra from '@chakra-ui/core';

const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

// https://chakra-ui.com/button#button-variant
const VARIANTS = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
};

const Button = ({ intent, ...props }) => (
  <Chakra.Button
    fontSize='s'
    height={['2.875rem', '2.375rem']}
    px='xl'
    rounded='xl'
    variantColor={intent}
    width={['100%', 'initial']}
    {...props}
  />
);

Button.propTypes = {
  intent: PropTypes.oneOf(Object.values(INTENTS)),
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
};

Button.defaultProps = {
  intent: INTENTS.PRIMARY,
  variant: VARIANTS.SOLID,
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
