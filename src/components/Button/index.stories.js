import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from '.';
import Heading from '../Heading';

import { capitalize } from '../../utils';

const { INTENTS, VARIANTS } = Button;

const intents = ['primary', 'secondary'];
const variants = ['outline', 'minimal'];

const stories = storiesOf('Buttons/Button', module);

stories.add('All states', () => (
  <>
    <Heading>Button</Heading>

    {intents.map(intent => (
      <div key={intent}>
        <Heading level={2}>{capitalize(intent)}</Heading>

        <div>
          <Heading level={3}>States</Heading>
          <Button intent={intent}>{intent}</Button>
          <Button intent={intent} className={`is-${intent}`} isLoading>
            Loading
          </Button>
        </div>

        <div>
          <Heading level={3}>Variants</Heading>
          {variants.map(variant => (
            <Button
              key={variant}
              intent={intent}
              variant={variant}
              className={`is-${variant}`}
            >
              {intent}
              {variant && `:${variant}`}
            </Button>
          ))}
        </div>
      </div>
    ))}

    <Heading level={2}>Disabled</Heading>
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
