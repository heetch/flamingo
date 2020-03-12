import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import TableRowCell from '.';

const stories = storiesOf('Table/TableRowCell', module);

stories.add('Playground', () => (
  <>
    <Heading>TableRowCell</Heading>
    <TableRowCell as='div'>{text('Content', 'Cell content')}</TableRowCell>
  </>
));
