import * as React from 'react';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/core';

const Link = (props: LinkProps) => <ChakraLink color='text.link' {...props} />;

export default Link;
