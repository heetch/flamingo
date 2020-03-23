import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Radio from './index';
import Heading from '../Heading';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Radio', module);

stories.add('All states', () => (
  <>
    <Heading>Radio</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Default</Heading>
        <Radio {...defaultProps} id='r1-1' name='r1' />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Radio {...defaultProps} id='r2-1' name='r2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Checked</Heading>
        <Radio {...defaultProps} id='r3-1' name='r3' checked />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Radio {...defaultProps} id='r4-1' name='r4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>No text</Heading>
        <Radio onChange={defaultProps.onChange} id='r5-1' name='r5' />
      </div>
      <div>
        <Heading level={2}>With helper</Heading>
        <Radio {...defaultProps} id='r6-1' name='r6' helper='With helper'>
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
