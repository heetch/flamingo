import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Radio from '.';
import StoryHeading from '../StoryHeading/StoryHeading';
import { theme } from '../../theme';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Radio', module);

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ marginRight: theme.space.xl, width: '10rem' }}>{children}</div>
);
stories.add('All states', () => (
  <>
    <StoryHeading>Radio</StoryHeading>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>Default</StoryHeading>
        <Radio {...defaultProps} id='r1-1' name='r1' />
      </Wrapper>
      <div>
        <StoryHeading level={2}>& disabled</StoryHeading>
        <Radio {...defaultProps} id='r2-1' name='r2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>Checked</StoryHeading>
        <Radio {...defaultProps} id='r3-1' name='r3' checked />
      </Wrapper>
      <div>
        <StoryHeading level={2}>& disabled</StoryHeading>
        <Radio {...defaultProps} id='r4-1' name='r4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>No text</StoryHeading>
        <Radio onChange={defaultProps.onChange} id='r5-1' name='r5' />
      </Wrapper>
      <div>
        <StoryHeading level={2}>With helper</StoryHeading>
        <Radio
          {...defaultProps}
          id='r6-1'
          name='r6'
          helper='With helper'
          invalid={boolean('Invalid', false)}
          valid={boolean('Valid', false)}
        >
          Label
        </Radio>
      </div>
    </div>
  </>
));

stories.add('Playground', () => (
  <Radio
    {...defaultProps}
    id='r7-1'
    name='r7'
    disabled={boolean('Is disabled?', false)}
    helper={text('Label helper', 'Label helper')}
  >
    {text('Label', 'Radio label')}
  </Radio>
));
