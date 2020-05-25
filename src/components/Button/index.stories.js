import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from '.';
import StoryHeading from '../StoryHeading/StoryHeading';

import { capitalize } from '../../utils/index.ts';

const { INTENTS, VARIANTS } = Button;

const intents = ['primary', 'secondary'];
const variants = ['outline', 'minimal'];

const stories = storiesOf('Buttons/Button', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Button</StoryHeading>

    {intents.map(intent => (
      <div key={intent}>
        <StoryHeading level={2}>{capitalize(intent)}</StoryHeading>

        <div>
          <StoryHeading level={3}>States</StoryHeading>
          <Button intent={intent}>{intent}</Button>
          <Button intent={intent} className={`is-${intent}`} isLoading>
            Loading
          </Button>
        </div>

        <div>
          <StoryHeading level={3}>Variants</StoryHeading>
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

    <StoryHeading level={2}>States</StoryHeading>
    <StoryHeading level={3}>Disabled</StoryHeading>
    <Button disabled>Disabled</Button>

    <StoryHeading level={3}>Success</StoryHeading>
    <Button intent={'success'}>Success</Button>

    <StoryHeading level={3}>Error</StoryHeading>
    <Button intent={'error'}>Error</Button>

    <StoryHeading level={3}>
      Is Loading and Error - Intent takes precedence{' '}
    </StoryHeading>
    <Button intent={'error'} isLoading>
      Error
    </Button>
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
