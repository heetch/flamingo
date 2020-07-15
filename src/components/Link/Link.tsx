import * as React from 'react';
import * as Chakra from '@chakra-ui/core';

const Link = (props: Chakra.LinkProps) => (
  <Chakra.Link color='text.link' {...props} />
);

export default Link;
