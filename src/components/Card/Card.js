import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@chakra-ui/core';

const ELEVATIONS = [0, 1, 2];
const SIZES = { S: 's', M: 'm' };

const Card = ({ elevation, isActive, size, ...props }) => {
  const { colors } = useTheme();
  return (
    <Box
      bg='element.primary'
      p={size === SIZES.S ? 'xl' : 'xxl'}
      shadow={
        isActive
          ? `inset 0 0 0 3px ${colors.primary[500]}`
          : `elevation.${elevation}`
      }
      rounded='xl'
      {...props}
    />
  );
};

Card.propTypes = {
  elevation: PropTypes.oneOf(ELEVATIONS),
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Card.defaultProps = {
  elevation: 0,
  isActive: false,
  size: SIZES.M,
};

Card.ELEVATIONS = ELEVATIONS;
Card.SIZES = SIZES;

export default Card;
