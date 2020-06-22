import * as React from 'react';
import { Text as ChakraText, BoxProps } from '@chakra-ui/core';

export enum TextWeights {
  normal = 'normal',
  bold = 'bold',
}

export enum TextSizes {
  normal = 'normal',
  small = 'small',
}

export type TextProps = BoxProps & {
  size?: TextSizes;
  weight?: TextWeights;
};

const Text = ({
  size = TextSizes.normal,
  weight = TextWeights.normal,
  ...props
}: TextProps) => (
  <ChakraText
    as='p'
    color='text.secondary'
    fontSize={size === TextSizes.small ? 's' : 'm'}
    fontWeight={weight === TextWeights.bold ? 'bold' : 'normal'}
    lineHeight='m'
    {...props}
  />
);

export default Text;
