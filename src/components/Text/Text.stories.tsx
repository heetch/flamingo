import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Text from './Text';
import { capitalize } from '../../utils';

const textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut porta sapien. Aliquam pellentesque, diam eu lacinia interdum, est ex aliquam neque, ut faucibus magna lectus a nibh.';

const sizes = ['normal', 'small'] as const;
const weights = ['normal', 'bold'] as const;

const stories = storiesOf('Text', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Text</StoryHeading>

    <StoryHeading level={2}>Default</StoryHeading>
    <Text>{textContent}</Text>

    <StoryHeading level={2}>Sizes</StoryHeading>
    {sizes.map(size => (
      <React.Fragment key={size}>
        <StoryHeading level={4} mb='m'>
          {capitalize(size)}
        </StoryHeading>
        <Text size={size}>{textContent}</Text>
      </React.Fragment>
    ))}

    <StoryHeading level={2}>Weights</StoryHeading>
    {weights.map(weight => (
      <React.Fragment key={weight}>
        <StoryHeading level={4} mb='m'>
          {capitalize(weight)}
        </StoryHeading>
        <Text weight={weight}>{textContent}</Text>
      </React.Fragment>
    ))}
  </>
));

stories.add('Playground', () => (
  <Text
    size={select('Size', sizes, 'normal')}
    weight={select('Weight', weights, 'normal')}
  >
    {textContent}
  </Text>
));
