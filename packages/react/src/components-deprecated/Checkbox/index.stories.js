import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from '.';
import Heading from '../Heading';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Checkbox', module);

stories.add('All states', () => (
  <>
    <Heading>Checkbox</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Default</Heading>
        <Checkbox {...defaultProps} id='c1' />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Checked</Heading>
        <Checkbox {...defaultProps} id='c3' checked />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>Undefined</Heading>
        <Checkbox {...defaultProps} id='c5' isUndefined />
      </div>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c6' isUndefined disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--f-space--xl)', width: '10rem' }}>
        <Heading level={2}>No text</Heading>
        <Checkbox onChange={defaultProps.onChange} id='c7' />
      </div>
      <div>
        <Heading level={2}>With helper</Heading>
        <Checkbox {...defaultProps} id='c8' helper='With helper'>
          Label
        </Checkbox>
      </div>
    </div>
  </>
));

stories.add('Playground', () => (
  <Checkbox
    id='playground'
    onChange={action('onChange')}
    isUndefined={boolean('Is undefined?', false)}
    disabled={boolean('Is disabled?', false)}
    helper={text('Label helper', 'Label helper')}
  >
    {text('Label', 'Checkbox label')}
  </Checkbox>
));
