import * as React from 'react';
import { Text as ChakraText, BoxProps } from '@chakra-ui/core';

export enum TextVariants {
  CONTENT = 'CONTENT',
  CONTENTBOLD = 'CONTENTBOLD',
  SUBCONTENT = 'SUBCONTENT',
  SUBCONTENTBOLD = 'SUBCONTENTBOLD',
}

export type TextProps = BoxProps & {
  variant?: TextVariants;
};

const fontSizeByVariant = {
  [TextVariants.CONTENT]: 'm',
  [TextVariants.CONTENTBOLD]: 'm',
  [TextVariants.SUBCONTENT]: 's',
  [TextVariants.SUBCONTENTBOLD]: 's',
};

const fontWeightByVariant = {
  [TextVariants.CONTENT]: 'normal',
  [TextVariants.CONTENTBOLD]: 'bold',
  [TextVariants.SUBCONTENT]: 'normal',
  [TextVariants.SUBCONTENTBOLD]: 'bold',
};

const Text = ({ variant = TextVariants.CONTENT, ...props }: TextProps) => (
  <ChakraText
    as='p'
    color='text.secondary'
    fontSize={fontSizeByVariant[variant]}
    fontWeight={fontWeightByVariant[variant]}
    lineHeight='m'
    {...props}
  />
);

export default Text;
