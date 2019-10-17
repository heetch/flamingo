import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Checkbox from '.';
import Heading from '../Heading';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
  name: 'checkbox',
};

const stories = storiesOf('Form controls/Checkbox', module);

stories.add('All states', () => (
  <>
    <Heading>Checkbox</Heading>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Default</Heading>
        <Checkbox {...defaultProps} />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Checked</Heading>
        <Checkbox {...defaultProps} checked />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} checked disabled />
      </div>
    </div>

    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 'var(--space-xl)', width: '10rem' }}>
        <Heading as={2}>Undefined</Heading>
        <Checkbox {...defaultProps} isUndefined />
      </div>
      <div>
        <Heading as={2}>& disabled</Heading>
        <Checkbox {...defaultProps} isUndefined disabled />
      </div>
    </div>

    <Heading as={2}>Helper</Heading>
    <Checkbox {...defaultProps} helper='With helper'>
      Label
    </Checkbox>
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
