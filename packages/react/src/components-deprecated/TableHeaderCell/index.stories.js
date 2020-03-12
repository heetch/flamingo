import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import TableHeaderCell from '.';

const stories = storiesOf('Table/TableHeaderCell', module);

stories.add('Playground', () => (
  <>
    <Heading>TableHeaderCell</Heading>
    <TableHeaderCell
      as='div'
      isSortable={boolean('Sortable', false)}
      isSorted={boolean('Sorted', false)}
      isSortedDesc={boolean('SortedDesc', false)}
    >
      {text('Content', 'Cell content')}
    </TableHeaderCell>
  </>
));
