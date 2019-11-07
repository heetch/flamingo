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

storiesOf('Dropdowns', module)
  .addDecorator(withKnobs)
  .add('Dropdown', () => (
    <Dropdown {...defaultProps()}>
      <Item
        type={Item.SIZES.normal}
        value='Take me there'
        helper='Check what can really happend!'
        onClick={action('onClick')}
      >
        Cars choice
      </Item>
      <Item
        type={Item.SIZES.normal}
        value='Check out'
        hideDivider
        helper='Enjoy your ride'
        onClick={action('onClick')}
      >
        Driver's time
      </Item>
    </Dropdown>
  ));
