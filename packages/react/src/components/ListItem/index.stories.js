import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

// import { LIST_ITEM_VALUES_TYPES } from '../../constants';

import Heading from '../Heading';
import Icon from '../Icon';
import ListItem from '.';

import { capitalize } from '../../utils';

const { SIZES } = ListItem;
const ICONS = { ...Icon.ICONS, None: null };

const stories = storiesOf('ListItem', module);

stories.add('All states', () => (
  <>
    <Heading>ListItem</Heading>
    <Heading as={2}>Sizes</Heading>

    {Object.values(SIZES).map(size => (
      <div key={size} style={{ marginBottom: 'var(--space-l)' }}>
        <div style={{ marginBottom: 'var(--space-s)' }}>
          <ListItem size={size}>{`${capitalize(size)} size`}</ListItem>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <ListItem size={size} helper='with onClick' onClick={() => {}}>
            {`${capitalize(size)} size`}
          </ListItem>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <ListItem
            size={size}
            helper='with onClick and value'
            onClick={() => {}}
            value='Click'
          >
            {`${capitalize(size)} size`}
          </ListItem>
        </div>

        <div style={{ marginBottom: 'var(--space-s)' }}>
          <ListItem
            size={size}
            contentIcon={Icon.ICONS.IconMoon}
            helper='with custom icons'
            onClick={() => {}}
            value='Click'
            valueIcon={Icon.ICONS.IconWallet}
          >
            {`${capitalize(size)} size`}
          </ListItem>
        </div>
      </div>
    ))}

    <Heading as={2}>States</Heading>
    <div style={{ marginBottom: 'var(--space-s)' }}>
      <ListItem invalid value='All good' valueIcon={Icon.ICONS.IconCheck}>
        Invalid
      </ListItem>
    </div>
    <div style={{ marginBottom: 'var(--space-s)' }}>
      <ListItem valid value='Nope' valueIcon={Icon.ICONS.IconCross}>
        Valid
      </ListItem>
    </div>
  </>
));

stories.add(
  'Playground',
  withInfo('')(() =>
    Array.from(new Array(number('Number of levels', 1))).map((_, index) => {
      const itemNumber = index + 1;
      const groupId = `Item ${itemNumber}`;

      return (
        <ListItem
          key={groupId}
          size={select(`(${itemNumber}) Size`, SIZES, undefined, groupId)}
          invalid={boolean('Invalid', false)}
          valid={boolean('Valid', false)}
          contentIcon={select(
            `(${itemNumber}) Content icon`,
            ICONS,
            ICONS.None,
            groupId,
          )}
          value={text(`(${itemNumber}) Value`, 'Value', groupId)}
          valueIcon={select(
            `(${itemNumber}) Value icon`,
            ICONS,
            ICONS.None,
            groupId,
          )}
          onClick={
            boolean(
              `(${itemNumber}) Does it have onClick action?`,
              false,
              groupId,
            )
              ? action('ListItem clicked')
              : undefined
          }
        >
          {text(`(${itemNumber}) Content`, 'ListItem', groupId)}
        </ListItem>
      );
    }),
  ),
);
