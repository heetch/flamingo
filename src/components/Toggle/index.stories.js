import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { theme } from '../../theme';
import StoryHeading from '../StoryHeading/StoryHeading';
import Toggle from '.';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Toggle', module);

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ marginRight: theme.space.xl, width: '10rem' }}>{children}</div>
);

stories.add('All states', () => (
  <>
    <StoryHeading>Toggle</StoryHeading>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>Default</StoryHeading>
        <Toggle {...defaultProps} name='r1' />
      </Wrapper>
      <div>
        <StoryHeading level={2}>& disabled</StoryHeading>
        <Toggle {...defaultProps} name='r2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>Checked</StoryHeading>
        <Toggle {...defaultProps} name='r3' checked />
      </Wrapper>
      <div>
        <StoryHeading level={2}>& disabled</StoryHeading>
        <Toggle {...defaultProps} name='r4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <StoryHeading level={2}>No text</StoryHeading>
        <Toggle onChange={defaultProps.onChange} name='r5' />
      </Wrapper>
      <div>
        <StoryHeading level={2}>With helper</StoryHeading>
        <Toggle {...defaultProps} name='r6' label='Label' helper='With texts'>
          Label
        </Toggle>
      </div>
    </div>
  </>
));

stories.add('Playground', () => (
  <Toggle
    disabled={boolean('Is disabled?', false)}
    helper={text('Label helper', 'Label helper')}
    onChange={action('onChange')}
  >
    {text('Label', 'Toggle label')}
  </Toggle>
));
