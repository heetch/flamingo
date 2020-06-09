import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Text, { TextVariants } from './Text';

const textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut porta sapien. Aliquam pellentesque, diam eu lacinia interdum, est ex aliquam neque, ut faucibus magna lectus a nibh.';

const stories = storiesOf('Text', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Text</StoryHeading>

    <StoryHeading level={2}>Default</StoryHeading>
    <Text>{textContent}</Text>

    <StoryHeading level={2}>Variants</StoryHeading>

    {Object.entries(TextVariants).map(([key, value]) => (
      <React.Fragment key={key}>
        <StoryHeading level={4} mb='m'>
          {key}
        </StoryHeading>
        <Text variant={value}>{textContent}</Text>
      </React.Fragment>
    ))}
  </>
));

stories.add('Playground', () => (
  <Text variant={select('Type', TextVariants, TextVariants.CONTENT)}>
    {textContent}
  </Text>
));
