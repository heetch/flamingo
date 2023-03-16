import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import Item from '.';

import { capitalize } from '../../utils';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const { SIZES } = Item;
const ICONS = { ...Icon.ICONS, None: null };

const stories = storiesOf('Item', module);

// eslint-disable-next-line react/prop-types
export const Wrapper = ({ children }) => (
  <div style={{ marginBottom: theme.space.s }}>{children}</div>
);

stories.add('All states', () => (
  <>
    <Heading>Item</Heading>
    <Heading level={2}>Sizes</Heading>

    {Object.values(SIZES).map(size => (
      <div key={size} style={{ marginBottom: theme.space.l }}>
        <Wrapper>
          <Item size={size}>{capitalize(size)} size</Item>
        </Wrapper>

        <Wrapper>
          <Item size={size} helper='with onClick' onClick={action('Click')}>
            {capitalize(size)} size
          </Item>
        </Wrapper>

        <Wrapper>
          <Item
            size={size}
            helper='with onClick and value'
            onClick={action('Click')}
            value='Click'
          >
            {capitalize(size)} size
          </Item>
        </Wrapper>

        <Wrapper>
          <Item
            size={size}
            contentIcon={Icon.ICONS.IconMoon}
            helper='with custom icons'
            onClick={() => {}}
            value='Click'
            valueIcon={Icon.ICONS.IconWallet}
          >
            {capitalize(size)} size
          </Item>
        </Wrapper>
      </div>
    ))}

    <Code>{`
    // size is normal, sub or mini
    <Item size={size}>{capitalize(size)} size</Item>
    <Item size={size} helper='with onClick' onClick={noop}>{capitalize(size)} size</Item>
    <Item size={size} helper='with onClick and value' onClick={noop} value='Click'>
      {capitalize(size)} size
    </Item>
    <Item
      size={size}
      contentIcon='IconMoon'
      helper='with custom icons'
      onClick={noop}
      value='Click'
      valueIcon='IconWallet'
    >
      {capitalize(size)} size
    </Item>
    `}</Code>

    <Heading level={2}>With no icon</Heading>
    <Wrapper>
      <Item
        helper='with icon null'
        onClick={() => {}}
        value='Click'
        valueIcon={null}
      >
        No Icon
      </Item>
    </Wrapper>

    <Code>{`
    <Item
      helper='with icon null'
      onClick={noop}
      value='Click'
      valueIcon='null'
    >
      No Icon
    </Item>
    `}</Code>

    <Heading level={2}>States</Heading>
    <Wrapper>
      <Item invalid value='Nope' valueIcon={Icon.ICONS.IconCross}>
        Invalid
      </Item>
    </Wrapper>
    <Wrapper>
      <Item valid value='All good' valueIcon={Icon.ICONS.IconCheck}>
        Valid
      </Item>
    </Wrapper>

    <Code>{`
    <Item invalid value='Nope' valueIcon='IconCross'>Invalid</Item>
    <Item valid value='All good' valueIcon='IconCheck'>Valid</Item>
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <Item
    size={select('Size', SIZES)}
    invalid={boolean('Invalid', false)}
    valid={boolean('Valid', false)}
    contentIcon={select('Content icon', ICONS, ICONS.None)}
    value={text('Value', 'Value')}
    helper={text('Helper', 'Helper')}
    valueIcon={select('Value icon', ICONS, ICONS.None)}
    onClick={
      boolean('Does it have onClick action?', false)
        ? action('Item clicked')
        : undefined
    }
  >
    {text('Content', 'Item')}
  </Item>
));
