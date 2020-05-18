import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { IProps, Elevations, Sizes } from './Card.d';
import { ITheme } from '../theme.d';

const Card: React.FC<IProps> = ({
  elevation = Elevations.NONE,
  isActive = false,
  size = Sizes.M,
  ...props
}) => (
  <Box
    bg='element.primary'
    p={size === Sizes.S ? 'xl' : 'xxl'}
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
