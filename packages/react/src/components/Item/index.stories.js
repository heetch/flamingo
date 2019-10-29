import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import Item from '.';

import { capitalize } from '../../utils';

const { SIZES } = Item;
const ICONS = { ...Icon.ICONS, None: null };

const stories = storiesOf('Item', module);

stories.add('All states', () => (
  <>
    <Heading>Item</Heading>
    <Heading level={2}>Sizes</Heading>

    {Object.values(SIZES).map(size => (
      <div key={size} style={{ marginBottom: 'var(--space-l)' }}>
        <div style={{ marginBottom: 'var(--space-s)' }}>
          <Item size={size}>{`${capitalize(size)} size`}</Item>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <Item size={size} helper='with onClick' onClick={() => {}}>
            {`${capitalize(size)} size`}
          </Item>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <Item
            size={size}
            helper='with onClick and value'
            onClick={() => {}}
            value='Click'
          >
            {`${capitalize(size)} size`}
          </Item>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <Item
            size={size}
            contentIcon={Icon.ICONS.IconMoon}
            helper='with custom icons'
            onClick={() => {}}
            value='Click'
            valueIcon={Icon.ICONS.IconWallet}
          >
            {`${capitalize(size)} size`}
          </Item>
        </div>
      </div>
    ))}

    <Heading level={2}>States</Heading>
    <div style={{ marginBottom: 'var(--space-s)' }}>
      <Item invalid value='Nope' valueIcon={Icon.ICONS.IconCross}>
        Invalid
      </Item>
    </div>
    <div style={{ marginBottom: 'var(--space-s)' }}>
      <Item valid value='All good' valueIcon={Icon.ICONS.IconCheck}>
        Valid
      </Item>
    </div>
  </>
));

stories.add('Playground', () => (
  <Item
    size={select('Size', SIZES)}
    invalid={boolean('Invalid', false)}
    valid={boolean('Valid', false)}
    contentIcon={select('Content icon', ICONS, ICONS.None)}
    value={text('Value', 'Value')}
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
