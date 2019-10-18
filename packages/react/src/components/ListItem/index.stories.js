import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { LIST_ITEM_SIZES, LIST_ITEM_VALUES_TYPES } from '../../constants';

import Icon from '../Icon';
import ListItem from '.';

const ICONS = { ...Icon.ICONS, None: null };

storiesOf('Items/ListItem', module)
  .add(
    'Playground',
    withInfo('')(() =>
      Array.from(new Array(number('Number of levels', 1))).map((_, index) => {
        const itemNumber = index + 1;
        const groupId = `Item ${itemNumber}`;

        return (
          <ListItem
            key={groupId}
            type={select(
              `(${itemNumber}) Size`,
              LIST_ITEM_SIZES,
              LIST_ITEM_SIZES.NORMAL,
              groupId,
            )}
            valueType={select(
              `(${itemNumber}) Value type`,
              LIST_ITEM_VALUES_TYPES,
              LIST_ITEM_VALUES_TYPES.DARK,
              groupId,
            )}
            strongValue={boolean(
              `(${itemNumber}) Strong value`,
              false,
              groupId,
            )}
            subtitle={text(
              `(${itemNumber}) Subtitle`,
              'This is subtitle',
              groupId,
            )}
            value={text(`(${itemNumber}) Value`, 'Click me', groupId)}
            hideDivider={boolean(
              `(${itemNumber}) Should hide divider?`,
              false,
              groupId,
            )}
            leftIcon={
              ICONS[select(`(${itemNumber}) Left icon`, ICONS, null, groupId)]
            }
            rightIcon={
              ICONS[select(`(${itemNumber}) Right icon`, ICONS, null, groupId)]
            }
            mockRightIcon={boolean(
              `(${itemNumber}) Should mock right icon?`,
              false,
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
            {text(`(${itemNumber}) Title`, 'ListItem', groupId)}
          </ListItem>
        );
      }),
    ),
  )
  .add('All states', () =>
    Object.values(LIST_ITEM_SIZES).map(type =>
      Object.values(LIST_ITEM_VALUES_TYPES).map(valueType => (
        <ListItem
          type={type}
          valueType={valueType}
          subtitle="Item's subtitle"
          value={valueType}
        >
          {`List item of type: ${type}`}
        </ListItem>
      )),
    ),
  );
