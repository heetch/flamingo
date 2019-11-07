import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '..';
import { Item } from '..';

const defaultProps = () => ({
  id: `dropdown-${Math.random()}`,
  onChange: action('onChange'),
});

storiesOf('Dropdowns/Dropdown', module)
  .addDecorator(withKnobs)
  .add('As Select component', () => (
    <Dropdown {...defaultProps()} placeholder='Select...' isSelectable>
      <Item type={Item.SIZES.MINI} optionValue='blueberry'>
        Blueberry
      </Item>
      <Item type={Item.SIZES.MINI} optionValue='strawberry'>
        Strawberry
      </Item>
    </Dropdown>
  ))
  .add('As Navigation', () => (
    <Dropdown {...defaultProps()} placeholder='What do you wanna do?'>
      <Item
        type={Item.SIZES.NORMAL}
        value='Take me there'
        helper='Check what can really happend!'
        onClick={action('onClick')}
      >
        Cars choice
      </Item>
      <Item
        type={Item.SIZES.NORMAL}
        value='Check out'
        helper='Enjoy your ride'
        onClick={action('onClick')}
      >
        Driver's time
      </Item>
    </Dropdown>
  ));
