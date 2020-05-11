import React from 'react';
import { Stack } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';
import Heading from '../Heading';

import { capitalize } from '../../utils';

const { INTENTS, VARIANTS } = Button;

const intents = Object.values(INTENTS);
const variants = Object.values(VARIANTS);

const stories = storiesOf('Buttons/Button', module);

stories.add('All states', () => (
  <>
    <Heading>Button</Heading>

    {intents.map(intent => (
      <div key={intent}>
        <Heading level={2}>{capitalize(intent)}</Heading>

        <Heading level={3}>States</Heading>

        <Stack isInline spacing='m' align='center'>
          <Button intent={intent}>{capitalize(intent)}</Button>
          <Button intent={intent} isDisabled>
            Disabled
          </Button>
          <Button intent={intent} isLoading>
            Loading
          </Button>
        </Stack>

        <Heading level={3}>Variants</Heading>

        <Stack isInline spacing='m' align='center'>
          {variants.map(variant => (
            <Button key={variant} intent={intent} variant={variant}>
              {capitalize(variant)}
            </Button>
          ))}
        </Stack>
      </div>
    ))}
  </>
));

stories.add('Playground', () => (
  <Button
    intent={select('Intent', intents)}
    variant={select('Variant', variants)}
    disabled={boolean('Disabled', false)}
    isLoading={boolean('Loading', false)}
  >
    {text('Content', 'Button')}
  </Button>
));
