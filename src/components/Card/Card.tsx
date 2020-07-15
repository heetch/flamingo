import * as React from 'react';
import * as Chakra from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

export type CardProps = {
  elevation?: 'none' | 's' | 'm';
  isActive?: boolean;
  size?: 's' | 'm';
};

const Card = ({
  elevation = 'none',
  isActive = false,
  size = 'm',
  ...props
}: CardProps) => (
  <Chakra.Box
    bg='element.primary'
    p={size === 's' ? 'xl' : 'xxl'}
    shadow={isActive ? 'Card.isActive' : `Card.${elevation}`}
    rounded='xl'
    {...props}
  />
);

export default styled(Card)`
  ${({ theme }: { theme: ITheme }) => `
    & & { border-radius: ${theme.radii.l}; }
    & & & { border-radius: ${theme.radii.m}; }
    & & & & { border-radius: ${theme.radii.s}; }
  `}
`;
