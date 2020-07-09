import * as React from 'react';
import * as Chakra from '@chakra-ui/core';

export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type IconProps = Chakra.IconProps & {
  size?: IconSize | string;
};

const getSize = (size: string) => {
  if (size === 's') return '0.75rem';
  if (size === 'm') return '1rem';
  if (size === 'l') return '1.25rem';
  return size;
};

const Icon = ({ size = IconSize.m, ...props }: Chakra.IconProps) => (
  <Chakra.Icon as='i' fill='currentColor' size={getSize(size)} {...props} />
);

export default Icon;
