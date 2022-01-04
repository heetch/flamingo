import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { theme } from '../../theme';
import Heading from '../Heading';
import Toggle from '.';
import { Code } from '../../storybook-utils';

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
    <Heading>Toggle</Heading>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>Default</Heading>
        <Toggle {...defaultProps} name='r1' />
      </Wrapper>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Toggle {...defaultProps} name='r2' disabled />
      </div>
    </div>
    <Code>{`
    <Toggle name='my-toggle' onChange={noop} disabled={disabled}>Label</Toggle>
    `}</Code>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>Checked</Heading>
        <Toggle {...defaultProps} name='r3' checked />
      </Wrapper>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Toggle {...defaultProps} name='r4' checked disabled />
      </div>
    </div>
    <Code>{`
    <Toggle name='my-toggle' onChange={noop} checked disabled={disabled}>Label</Toggle>
    `}</Code>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>No text</Heading>
        <Toggle onChange={defaultProps.onChange} name='r5' />
      </Wrapper>
      <div>
        <Heading level={2}>With helper</Heading>
        <Toggle {...defaultProps} name='r6' helper='With texts'>
          Label
        </Toggle>
      </div>
    </div>
    <Code>{` 
    <Toggle name='no-text' onChange={noop} />
    <Toggle name='with-helper' helper='With texts'>Label</Toggle>
    `}</Code>
  </>
));

stories.add('Playground', () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChangeAction = action('onChange');

  const onChange = state => {
    onChangeAction(state);
    setIsChecked(state);
  };

  return (
    <>
      <Toggle
        disabled={boolean('Is disabled?', false)}
        helper={text('Label helper', 'Label helper')}
        onChange={onChange}
        checked={isChecked}
      >
        {text('Label', 'Toggle label')}
      </Toggle>

      <button onClick={() => setIsChecked(true)}>Force ON</button>
      <button onClick={() => setIsChecked(false)}>Force OFF</button>
    </>
  );
});
