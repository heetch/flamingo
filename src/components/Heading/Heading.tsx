import * as React from 'react';
import * as Chakra from '@chakra-ui/core';

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

export type HeadingProps = Chakra.HeadingProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ as = 'h1', level = 1, ...props }: HeadingProps) => (
  <Chakra.Heading
    as={as}
    fontSize={fontSizeByLevel[level]}
    lineHeight={lineHeightByLevel[level]}
    fontWeight={800}
    {...props}
  />
);

const H1 = (props: HeadingProps) => <Heading level={1} {...props} />;
const H2 = (props: HeadingProps) => <Heading level={2} {...props} />;
const H3 = (props: HeadingProps) => <Heading level={3} {...props} />;
const H4 = (props: HeadingProps) => <Heading level={4} {...props} />;
const H5 = (props: HeadingProps) => <Heading level={5} {...props} />;
const H6 = (props: HeadingProps) => <Heading level={6} {...props} />;

export default Heading;
export { H1, H2, H3, H4, H5, H6 };
