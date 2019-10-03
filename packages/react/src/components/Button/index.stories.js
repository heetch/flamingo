import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from '.';
import Icon from '../Icon';

import { ICONS, INTENTS } from '../../constants';

const intents = Object.values(INTENTS);
const states = ['default', 'hover', 'active', 'disabled'];

const stories = storiesOf('Buttons/Button', module);

const Link = (
  { children, to, ...props }, // eslint-disable-line react/prop-types
) => (
  <a {...props} href={to}>
    {children}
  </a>
);

stories.add('With intents', () => (
  <div style={{ display: 'flex' }}>
    {intents.map(intent => (
      <div
        key={intent}
        style={{
          textAlign: 'center',
          padding: '0 var(--space-s)',
          flexGrow: 1,
        }}
      >
        {states.map(state => (
          <div key={`${intent}-${state}`}>
            <Button
              className={`is-${state}`}
              disabled={state === 'disabled'}
              intent={intent}
            >
              {intent} ({state})
            </Button>
          </div>
        ))}
      </div>
    ))}
  </div>
));

stories.add('With icons', () => (
  <>
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Button>
        Success <Icon icon={ICONS.IconCheck} />
      </Button>
    </div>

    <div style={{ width: '100%', textAlign: 'center' }}>
      <Button>
        Nope <Icon icon={ICONS.IconCross} />
      </Button>
    </div>
  </>
));

stories.add('As link', () => (
  <Button as={Link} to='https://www.heetch.com' target='_blank'>
    Link to heetch.com
  </Button>
));

stories.add('Playground', () => (
  <Button
    intent={select('Intent', INTENTS, 'primary')}
    disabled={boolean('Disabled', false)}
  >
    {text('Content', 'Button content')}
  </Button>
));
