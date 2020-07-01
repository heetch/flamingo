import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import StoryHeading from '../StoryHeading/StoryHeading';
import Icon from '../_DeprecatedIcon';
import Item from '.';

import { capitalize } from '../../utils/index.ts';
import { theme } from '../../theme';

const { SIZES } = Item;
const ICONS = { ...Icon.ICONS, None: null };

const stories = storiesOf('Item', module);

// eslint-disable-next-line react/prop-types
export const Wrapper = ({ children }) => (
  <div style={{ marginBottom: theme.space.s }}>{children}</div>
);

stories.add('All states', () => (
  <>
    <StoryHeading>Item</StoryHeading>
    <StoryHeading level={2}>Sizes</StoryHeading>

    {Object.values(SIZES).map(size => (
      <div key={size} style={{ marginBottom: theme.space.l }}>
        <Wrapper>
          <Item size={size}>{`${capitalize(size)} size`}</Item>
        </Wrapper>

        <Wrapper>
          <Item size={size} helper='with onClick' onClick={() => {}}>
            {`${capitalize(size)} size`}
          </Item>
        </Wrapper>

        <Wrapper>
          <Item
            size={size}
            helper='with onClick and value'
            onClick={() => {}}
            value='Click'
          >
            {`${capitalize(size)} size`}
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
            {`${capitalize(size)} size`}
          </Item>
        </Wrapper>
      </div>
    ))}

    <StoryHeading level={2}>States</StoryHeading>
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
