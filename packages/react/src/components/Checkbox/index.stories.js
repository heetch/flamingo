import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Checkbox from '.';
import Heading from '../Heading';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form controls/Checkbox', module);

stories.add('All states', () => (
  <>
    <Heading>Checkbox</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Default</Heading>
        <Checkbox {...defaultProps} name='c1' />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} name='c2' disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Checked</Heading>
        <Checkbox {...defaultProps} name='c3' checked />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} name='c4' checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Undefined</Heading>
        <Checkbox {...defaultProps} name='c5' isUndefined />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} name='c6' isUndefined disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>No text</Heading>
        <Checkbox onChange={defaultProps.onChange} name='c7' />
      </div>
      <div>
        <Heading as={2}>With helper</Heading>
        <Checkbox {...defaultProps} name='c8' helper='With helper'>
          Label
        </Checkbox>
      </div>
    </div>
  </>
));

stories.add(
  'Playground',
  withInfo('')(() => (
    <Checkbox
      {...defaultProps}
      isUndefined={boolean('Is undefined?', false)}
      disabled={boolean('Is disabled?', false)}
      helper={text('Label helper', 'Label helper')}
    >
      {text('Label', 'Checkbox label')}
    </Checkbox>
  )),
);
