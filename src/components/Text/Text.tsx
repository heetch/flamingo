import * as React from 'react';
import { Text as ChakraText, BoxProps } from '@chakra-ui/core';

export type TextProps = BoxProps & {
  size?: 'normal' | 'small';
  weight?: 'normal' | 'bold';
};

const Text = ({ size = 'normal', weight = 'normal', ...props }: TextProps) => (
  <ChakraText
    as='p'
    color='text.secondary'
    fontSize={size === 'small' ? 's' : 'm'}
    fontWeight={weight}
    lineHeight='m'
    {...props}
  />
);

export default Text;
