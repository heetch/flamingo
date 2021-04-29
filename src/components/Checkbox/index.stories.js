import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from '.';
import Heading from '../Heading';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Checkbox', module);

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ marginRight: theme.space.xl, width: '10rem' }}>{children}</div>
);

stories.add('All states', () => (
  <>
    <Heading>Checkbox</Heading>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>Default</Heading>
        <Checkbox {...defaultProps} id='c1' />
      </Wrapper>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c2' disabled />
      </div>
    </div>
    <Code>{`
    <Checkbox onChange={noop} disabled={isDisabled}>Label</Checkbox>
    `}</Code>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>Checked</Heading>
        <Checkbox {...defaultProps} id='c3' checked />
      </Wrapper>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c4' checked disabled />
      </div>
    </div>
    <Code>{`
    <Checkbox onChange={noop} disabled={isDisabled} checked={isChecked}>Label</Checkbox>
    `}</Code>

    <div style={{ display: 'flex' }}>
      <Wrapper>
        <Heading level={2}>Undefined</Heading>
        <Checkbox {...defaultProps} id='c5' isUndefined />
      </Wrapper>
      <div>
        <Heading level={2}>& disabled</Heading>
        <Checkbox {...defaultProps} id='c6' isUndefined disabled />
      </div>
    </div>
    <Code>{`
    <Checkbox onChange={noop} disabled={isDisabled} isUndefined={isUndefined}>Label</Checkbox>
    `}</Code>

    <div>
      <Heading level={2}>No text</Heading>
      <Checkbox onChange={defaultProps.onChange} id='c7' />
    </div>
    <Code>{`
    <Checkbox onChange={noop} />
    `}</Code>

    <div>
      <Heading level={2}>With helper</Heading>
      <Checkbox
        {...defaultProps}
        id='c8'
        helper='With helper'
        invalid={boolean('Invalid', false)}
        valid={boolean('Valid', false)}
      >
        Label
      </Checkbox>
    </div>
    <Code>{`
    <Checkbox onChange={noop} helper='With helper' valid={isValid} invalid={isInvalid}>
      Label
    </Checkbox>
    `}</Code>
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
