import * as React from 'react';
import * as Chakra from '@chakra-ui/core';

export type TextProps = Chakra.BoxProps & {
  size?: 'normal' | 'small';
  weight?: 'normal' | 'bold';
};

const Text = ({ size = 'normal', weight = 'normal', ...props }: TextProps) => (
  <Chakra.Text
    as='p'
    color='text.secondary'
    fontSize={size === 'small' ? 's' : 'm'}
    fontWeight={weight}
    lineHeight='m'
    {...props}
  />
);

export default Text;
