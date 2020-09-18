import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Accordion from '.';
import Heading from '../Heading';

// const { TYPES } = Alert;

const stories = storiesOf('Accordion', module);

stories.add('All states', () => (
  <>
    <Heading>Accordion</Heading>
    <Accordion />
  </>
));

// stories.add('Playground', () => {
//   const withOnClose = boolean('With onClose handler', true);
//   const onClose = withOnClose ? action('Alert closed!') : null;

//   return (
//   );
// });
