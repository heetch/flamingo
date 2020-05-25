import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

export enum CardElevations {
  NONE = '0',
  S = '1',
  M = '2',
}

export enum CardSizes {
  S = 'S',
  M = 'M',
}

export interface CardProps {
  elevation?: CardElevations;
  isActive?: boolean;
  size?: CardSizes;
}

const Card: React.FC<CardProps> = ({
  elevation = CardElevations.NONE,
  isActive = false,
  size = CardSizes.M,
  ...props
}) => (
  <Box
    bg='element.primary'
    p={size === CardSizes.S ? 'xl' : 'xxl'}
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
