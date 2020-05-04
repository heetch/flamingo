import React from 'react';
import PropTypes from 'prop-types';
import { Box, CloseButton, Flex, Heading, Text } from '@chakra-ui/core';

import Icon from '../Icon';

const TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

const icons = {
  [TYPES.INFORMATION]: Icon.ICONS.IconInfo,
  [TYPES.SUCCESS]: Icon.ICONS.IconCheck,
  [TYPES.ERROR]: Icon.ICONS.IconAlertOctagon,
};

const colorByIntent = {
  [TYPES.INFORMATION]: 'secondary',
  [TYPES.SUCCESS]: 'green',
  [TYPES.ERROR]: 'red',
};

const types = Object.values(TYPES);

const Alert = ({ title, children, type, onClose, ...props }) => {
  const color = colorByIntent[type];

  return (
    <Flex
      pos='relative'
      rounded='m'
      border='2px'
      borderColor={`${color}.500`}
      overflow='hidden'
      {...props}
    >
      <Flex
        flexShrink={0}
        alignItems='center'
        bg={`${color}.500`}
        color='white'
        p={2}
      >
        <Icon icon={icons[type]} />
      </Flex>
      <Box flexGrow={1} p={4} bg='white'>
        <Heading as='h1' fontSize='m'>
          {title}
        </Heading>
        <Text>{children}</Text>
      </Box>

      <CloseButton pos='absolute' top={1} right={1} rounded='full' />
    </Flex>
  );
};

Alert.displayName = 'Alert';

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.node,
  type: PropTypes.oneOf(types),
};

Alert.defaultProps = {
  type: TYPES.INFORMATION,
};

Alert.TYPES = TYPES;

export default Alert;
