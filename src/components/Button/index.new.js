import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/core';

const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Button = ({ intent, ...props }) => {
  return (
    <ChakraButton
      fontSize='s'
      rounded='xl'
      height='2.375rem'
      variantColor={intent}
      {...props}
    />
  );
};

Button.propTypes = {
  intent: PropTypes.oneOf(Object.values(INTENTS)),
};

Button.defaultProps = {
  intent: INTENTS.PRIMARY,
};

export default Button;
