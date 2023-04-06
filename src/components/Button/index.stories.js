import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from '.';
import Heading from '../Heading';

import { capitalize } from '../../utils';
import { Code } from '../../storybook-utils';
import { theme } from '../../theme';

const { INTENTS, VARIANTS } = Button;

const intents = ['primary', 'secondary'];
const variants = ['outline', 'minimal', 'text'];

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
          <Code>{`
          <Button intent='${intent}'>${intent}</Button>
          <Button intent='${intent}' className='is-${intent}' isLoading>
          `}</Code>
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
          <Code>
            {variants
              .map(
                variant => `
            <Button intent='${intent}' variant='${variant}' className='is-${variant}'>
              ${intent}${variant && `:${variant}`}
            </Button>
            `,
              )
              .join('')}
          </Code>
        </div>
      </div>
    ))}

    <Heading level={2}>Disable margin</Heading>
    <Button>primary</Button>
    <Button disableAutoMarginLeft>button without margin</Button>
    <Code>{`
        <Button>primary</Button>
        <Button disableAutoMarginLeft>button without margin</Button>
    `}</Code>

    <Heading level={2}>States</Heading>
    <Heading level={3}>Disabled</Heading>
    <Button disabled>Disabled</Button>
    <Button variant='outline' disabled>
      Disabled
    </Button>
    <Button variant='minimal' disabled>
      Disabled
    </Button>
    <Button variant='text' disabled>
      Disabled
    </Button>
    <Code>{`
      <Button disabled>Disabled</Button>
      <Button variant='outline' disabled>Disabled</Button>
      <Button variant='minimal' disabled>Disabled</Button>
      <Button variant='text' disabled>Disabled</Button>
    `}</Code>

    <Heading level={3}>Success</Heading>
    <Button intent={'success'}>Success</Button>
    <Code>{`<Button intent={'success'}>Success</Button>`}</Code>

    <Heading level={3}>Error</Heading>
    <Button intent={'error'}>Error</Button>
    <Code>{`<Button intent={'error'}>Error</Button>`}</Code>

    <Heading level={3}>Is Loading and Error - Intent takes precedence </Heading>
    <Button intent={'error'} isLoading>
      Error
    </Button>
    <Code>{`<Button intent={'error'} isLoading>Error</Button>`}</Code>
  </>
));

stories.add('Playground', () => (
  <div style={{ border: '1px dashed lightgray' }}>
    <Button
      intent={select('Intent', INTENTS)}
      variant={select('Variant', VARIANTS)}
      disabled={boolean('Disabled', false)}
      isLoading={boolean('Loading', false)}
      margin={select(
        'Margin',
        {
          s: theme.space.s,
          m: theme.space.m,
          l: theme.space.l,
          xl: theme.space.xl,
          xxl: theme.space.xxl,
        },
        theme.space.m,
      )}
    >
      {text('Content', 'Button content')}
    </Button>
  </div>
));
