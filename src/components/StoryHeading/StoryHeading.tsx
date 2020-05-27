import * as React from 'react';

import { H1, HeadingProps } from '../Heading/Heading';

export type StoryHeadingProps = HeadingProps;

const StoryHeading: React.FC<StoryHeadingProps> = ({ level = 1, ...props }) => (
  <H1 my='xl' level={level} {...props} />
);

export default StoryHeading;
