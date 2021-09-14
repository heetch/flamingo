import React from 'react';
import { storiesOf } from '@storybook/react';

import { select, text } from '@storybook/addon-knobs';
import Button from '../Button';
import Heading from '../Heading';
import Popover from '.';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const { PLACEMENTS } = Popover;
const ITEM_SPACING = '25%';

const borderRadius = [
  theme.borderRadius.s,
  theme.borderRadius.m,
  theme.borderRadius.l,
  theme.borderRadius.xl,
];

const backgroundColor = [
  theme.color.element.error,
  theme.color.element.inactive,
  theme.color.element.overlay,
  theme.color.element.primary,
  theme.color.element.secondary,
  theme.color.element.success,
  theme.color.element.tertiary,
];

const stories = storiesOf('Popover-Tooltip', module);

stories.add('All states', () => (
  <>
    <Heading>Popover</Heading>

    <div
      style={{
        position: 'relative',
        height: '15rem',
        border: `1px dashed ${theme.color.brand.secondaryLight}`,
        borderRadius: theme.borderRadius.s,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: ITEM_SPACING,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Popover content='Popover content' placement={PLACEMENTS.TOP}>
          <Button>Top</Button>
        </Popover>
      </div>

      <div
        style={{
          position: 'absolute',
          right: ITEM_SPACING,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Popover content='Popover content' placement={PLACEMENTS.RIGHT}>
          <Button>Right</Button>
        </Popover>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: ITEM_SPACING,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Popover content='Popover content' placement={PLACEMENTS.BOTTOM}>
          <Button>Bottom</Button>
        </Popover>
      </div>

      <div
        style={{
          position: 'absolute',
          left: ITEM_SPACING,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Popover content='Popover content' placement={PLACEMENTS.LEFT}>
          <Button>Left</Button>
        </Popover>
      </div>
    </div>

    <Code>{`
    <Popover content='Popover content' placement='${PLACEMENTS.TOP}'>
      <Button>Top</Button>
    </Popover>
    <Popover content='Popover content' placement='${PLACEMENTS.RIGHT}'>
      <Button>Right</Button>
    </Popover>
    <Popover content='Popover content' placement='${PLACEMENTS.BOTTOM}'>
      <Button>Bottom</Button>
    </Popover>
    <Popover content='Popover content' placement='${PLACEMENTS.LEFT}'>
      <Button>Left</Button>
    </Popover>
    `}</Code>
  </>
));

stories.add('Playground', () => {
  return (
    <div
      style={{
        position: 'absolute',
        marginLeft: '10px',
        transform: 'translateX(-50%)',
      }}
    >
      <Popover
        backgroundColor={select('backgroundColor', backgroundColor)}
        borderRadius={select('borderRadius', borderRadius)}
        content={text('Content', 'Badge content')}
      >
        <Button>Playground</Button>
      </Popover>
    </div>
  );
});
