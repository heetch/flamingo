import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from '.';
import Heading from '../Heading';

import { capitalize } from '../../utils';

const { INTENTS, VARIANTS } = Button;

const intents = Object.values(INTENTS);
const variants = Object.values(VARIANTS);
const states = ['default', 'hover', 'active'];

const stories = storiesOf('Buttons/Button', module);

stories.add('All states', () => (
  <>
    <Heading>Button</Heading>

    {intents.map(intent => (
      <div key={intent}>
        <Heading as={2}>{capitalize(intent)}</Heading>

        <div>
          <Heading as={3}>States</Heading>
          {states.map(state => (
            <Button
              key={state}
              intent={intent}
              className={`is-${state}`}
              style={{ marginRight: 'var(--space-m)' }}
            >
              {intent}
              {state !== 'default' && `:${state}`}
            </Button>
          ))}
          <Button
            intent={intent}
            className={`is-${intent}`}
            isLoading
            style={{ marginRight: 'var(--space-m)' }}
          >
            Loading
          </Button>
        </div>

        <div>
          <Heading as={3}>Variants</Heading>
          {variants.map(variant => (
            <Button
              key={variant}
              intent={intent}
              className={`is-${variant}`}
              style={{ marginRight: 'var(--space-m)' }}
            >
              {intent}
              {variant && `:${variant}`}
            </Button>
          ))}
        </div>
      </div>
    ))}

    <Heading as={2}>Disabled</Heading>
    <Button disabled>Disabled</Button>
  </>
));

stories.add('Playground', () => (
  <Button
    intent={select('Intent', INTENTS)}
    variant={select('Variant', VARIANTS)}
    disabled={boolean('Disabled', false)}
    isLoading={boolean('Loading', false)}
  >
    {text('Content', 'Button content')}
  </Button>
));
