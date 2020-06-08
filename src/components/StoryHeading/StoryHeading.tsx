import * as React from 'react';

import { H1, HeadingProps } from '../Heading/Heading';

export type StoryHeadingProps = HeadingProps;

const StoryHeading = ({ level = 1, ...props }: StoryHeadingProps) => (
  <H1 my='xl' level={level} {...props} />
);

export default StoryHeading;
