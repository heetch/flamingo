import * as React from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/core';

const fontSizeByLevel = {
  1: 'xxl',
  2: 'xl',
  3: 'l',
  4: 'm',
  5: 's',
  6: 'xs',
};

const lineHeightByLevel = {
  1: 'xl',
  2: 'l',
  3: 'm',
  4: 's',
  5: 's',
  6: 's',
};

export type HeadingProps = ChakraHeadingProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  level = 1,
  ...props
}) => (
  <ChakraHeading
    as={as}
    fontSize={fontSizeByLevel[level]}
    lineHeight={lineHeightByLevel[level]}
    fontWeight={800}
    {...props}
  />
);

const H1: React.FC<HeadingProps> = props => <Heading level={1} {...props} />;
const H2: React.FC<HeadingProps> = props => <Heading level={2} {...props} />;
const H3: React.FC<HeadingProps> = props => <Heading level={3} {...props} />;
const H4: React.FC<HeadingProps> = props => <Heading level={4} {...props} />;
const H5: React.FC<HeadingProps> = props => <Heading level={5} {...props} />;
const H6: React.FC<HeadingProps> = props => <Heading level={6} {...props} />;

export default Heading;
export { H1, H2, H3, H4, H5, H6 };
