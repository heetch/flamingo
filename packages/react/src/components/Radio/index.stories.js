import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Radio from '.';
import Heading from '../Heading';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form controls/Radio', module);

stories.add('All states', () => (
  <>
    <Heading>Radio</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading level={2}>Default</Heading>
        <Radio {...defaultProps} name='r1' />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Radio {...defaultProps} name='r2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading level={2}>Checked</Heading>
        <Radio {...defaultProps} name='r3' checked />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Radio {...defaultProps} name='r4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading level={2}>No text</Heading>
        <Radio onChange={defaultProps.onChange} name='r5' />
      </div>
      <div>
        <Heading level={2}>With helper</Heading>
        <Radio {...defaultProps} name='r6' helper='With helper'>
          Label
        </Radio>
      </div>
    </div>
  </>
));

stories.add(
  'Playground',
  withInfo('')(() => (
    <Radio
      {...defaultProps}
      name='r7'
      disabled={boolean('Is disabled?', false)}
      helper={text('Label helper', 'Label helper')}
    >
      {text('Label', 'Radio label')}
    </Radio>
  )),
);
