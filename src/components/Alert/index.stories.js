import React from 'react';
import { Box } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import AlertV1 from '.';
import AlertV2 from './index.new';
import Heading from '../Heading';

const { TYPES } = AlertV1;

const Alert = props => (
  <Box>
    <AlertV1 {...props} />
    <AlertV2 {...props} />
  </Box>
);

const stories = storiesOf('Alert', module);

stories.add('All states', () => (
  <>
    <Heading>Alert</Heading>
    <Heading level={2}>States</Heading>
    {Object.values(TYPES).map(type => (
      <Alert
        key={type}
        title={`Alert of type ${type}`}
        type={type}
        onClose={() => {}}
      >
        Description
      </Alert>
    ))}
  </>
));

stories.add('Playground', () => {
  const withOnClose = boolean('With onClose handler', true);
  const onClose = withOnClose ? action('Alert closed!') : null;

  return (
    <Alert
      title={text('Title', 'Title of alert')}
      onClose={onClose}
      type={select('Alert type', TYPES, TYPES.INFORMATION)}
    >
      {text('Message', 'Alert message')}
    </Alert>
  );
});
