import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Radio from '.';
import Heading from '../Heading';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';
import Icon from '../Icon';

const defaultProps = {
  children: 'Label',
  onChange: () => {},
};

const stories = storiesOf('Form/Radio', module);

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ marginRight: theme.space.xl, width: '10rem' }}>{children}</div>
);
stories.add('All states', () => {
  const invalid = boolean('Invalid', false);
  const valid = boolean('Valid', false);

  return (
    <>
      <Heading>Radio</Heading>

      <div style={{ display: 'flex' }}>
        <Wrapper>
          <Heading level={2}>Default</Heading>
          <Radio {...defaultProps} id='r1-1' name='r1' />
        </Wrapper>
        <div>
          <Heading level={2}>& disabled</Heading>
          <Radio {...defaultProps} id='r2-1' name='r2' disabled />
        </div>
      </div>

      <Code>{`
    <Radio id='r1-1' name='r1' onChange={noop}>Label</Radio>
    <Radio id='r2-1' name='r2' onChange={noop} disabled>Label</Radio>
    `}</Code>

      <div style={{ display: 'flex' }}>
        <Wrapper>
          <Heading level={2}>Checked</Heading>
          <Radio {...defaultProps} id='r3-1' name='r3' checked />
        </Wrapper>
        <div>
          <Heading level={2}>& disabled</Heading>
          <Radio {...defaultProps} id='r4-1' name='r4' checked disabled />
        </div>
      </div>

      <Code>{`
    <Radio id='r3-1' name='r3' onChange={noop} checked>Label</Radio>
    <Radio id='r4-1' name='r4' onChange={noop} checked disabled>Label</Radio>
    `}</Code>

      <Wrapper>
        <Heading level={2}>No text</Heading>
        <Radio onChange={defaultProps.onChange} id='r5-1' name='r5' />
      </Wrapper>

      <Code>{`
    <Radio id='r5-1' name='r5' onChange={noop} />
    `}</Code>

      <Wrapper>
        <Heading level={2}>With helper</Heading>
        <Radio
          {...defaultProps}
          id='r6-1'
          name='r6'
          helper='With helper'
          invalid={invalid}
          valid={valid}
        >
          Label
        </Radio>
      </Wrapper>

      <Code>{`
    <Radio id='r6-1' name='r6' helper='With helper'${valid ? ` valid` : ''}${
        invalid ? ` invalid` : ''
      } onChange={noop}>
      Label
    </Radio>
    `}</Code>
    </>
  );
});

const sizes = Object.entries(Icon.SIZES).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: theme.iconSize[value],
  }),
  { '- default -': undefined },
);

stories.add('Playground', () => (
  <Radio
    id='r7-1'
    name='r7'
    disabled={boolean('Is disabled?', false)}
    checked={boolean('Is checked', false)}
    valid={boolean('Is valid', false)}
    invalid={boolean('Is invalid', false)}
    helper={text('Label helper', 'Label helper')}
    onChange={action('Change')}
    size={select('Size', sizes)}
  >
    {text('Label', 'Radio label')}
  </Radio>
));
