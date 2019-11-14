import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '..';
import { Item } from '..';
import { boolean, select, text, number } from '@storybook/addon-knobs';
import Heading from '../Heading';
import Icon from '../Icon';

const { SIZES } = Item;
const ICONS = { ...Icon.ICONS, None: null };

const Container = (
  { children }, // eslint-disable-line react/prop-types
) => <div style={{ margin: 'var(--f-space--xl) 0' }}>{children}</div>;

const stories = storiesOf('Dropdown', module);

stories
  .add('All states', () => (
    <>
      <Heading>Dropdown</Heading>
      <Heading level={2}>Working as a select</Heading>

      <Container>
        <Dropdown
          id='dropdown-1'
          onChange={action('onChange')}
          placeholder='Select...'
          isSelectable
        >
          <Item type={Item.SIZES.MINI} optionValue='blueberry'>
            Blueberry
          </Item>
          <Item type={Item.SIZES.MINI} optionValue='strawberry'>
            Strawberry
          </Item>
        </Dropdown>
      </Container>
      <Heading level={2}>Working as a menu</Heading>
      <Container>
        <Dropdown id='dropdown-2' placeholder='What do you wanna do?'>
          <Item
            contentIcon={Icon.ICONS.IconSun}
            onClick={action('onClick')}
            value='Go!'
            valueIcon='IconArrowUpRight'
          >
            Travel towards the sun!
          </Item>
          <Item
            contentIcon={Icon.ICONS.IconCoffee}
            onClick={action('onClick')}
            value='Order!'
            valueIcon='IconArrowUpRight'
          >
            Drink the best coffee ever
          </Item>
          <Item
            contentIcon={Icon.ICONS.IconPower}
            onClick={action('onClick')}
            value='Relax!'
            valueIcon='IconArrowUpRight'
          >
            Switch off and chill for a bit
          </Item>
        </Dropdown>
      </Container>
    </>
  ))
  .add('Playground', () => (
    <Dropdown
      id='dropdown-playground'
      onChange={action('onChange')}
      placeholder={text('Placeholder', 'Select...')}
      isSelectable={boolean('Is selectable?', false)}
    >
      {Array.from(
        new Array(
          number("Number of items (they'll all share the same config here)", 3),
        ),
      ).map((_, index) => (
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
          {`(${index})`} {text('Content', 'Item')}
        </Item>
      ))}
    </Dropdown>
  ));
