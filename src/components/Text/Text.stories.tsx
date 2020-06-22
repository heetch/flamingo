import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Text, { TextSizes, TextWeights } from './Text';
import { capitalize } from '../../utils';

const textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut porta sapien. Aliquam pellentesque, diam eu lacinia interdum, est ex aliquam neque, ut faucibus magna lectus a nibh.';

const stories = storiesOf('Text', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Text</StoryHeading>

    <StoryHeading level={2}>Default</StoryHeading>
    <Text>{textContent}</Text>

    <StoryHeading level={2}>Sizes</StoryHeading>
    {Object.entries(TextSizes).map(([key, value]) => (
      <React.Fragment key={key}>
        <StoryHeading level={4} mb='m'>
          {capitalize(key)}
        </StoryHeading>
        <Text size={value}>{textContent}</Text>
      </React.Fragment>
    ))}

    <StoryHeading level={2}>Weights</StoryHeading>
    {Object.entries(TextWeights).map(([key, value]) => (
      <React.Fragment key={key}>
        <StoryHeading level={4} mb='m'>
          {capitalize(key)}
        </StoryHeading>
        <Text weight={value}>{textContent}</Text>
      </React.Fragment>
    ))}
  </>
));

stories.add('Playground', () => (
  <Text
    size={select('Size', TextSizes, TextSizes.normal)}
    weight={select('Weight', TextWeights, TextWeights.normal)}
  >
    {textContent}
  </Text>
));
