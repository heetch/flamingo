import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Toggle from '.';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form controls/Toggle', module);

stories.add('All states', () => (
  <>
    <Heading>Toggle</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Default</Heading>
        <Toggle {...defaultProps} name='r1' />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Toggle {...defaultProps} name='r2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Checked</Heading>
        <Toggle {...defaultProps} name='r3' checked />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Toggle {...defaultProps} name='r4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>No text</Heading>
        <Toggle onChange={defaultProps.onChange} name='r5' />
      </div>
      <div>
        <Heading level={2}>With helper</Heading>
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
