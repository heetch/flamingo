import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Tabs from '.';

storiesOf('Navigation/Tabs', module).add(
  'Playground',
  withInfo('')(() => (
    <Tabs
      elements={array('Tabs (separated by comma)', [
        'Cars',
        'Drivers',
        'Rides',
        'Vehicles',
        'Discounts',
        'Promotions',
      ])}
    />
  )),
);
