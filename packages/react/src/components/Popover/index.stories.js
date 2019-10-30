import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Heading from '../Heading';
import Popover from '.';

const { PLACEMENTS } = Popover;
const ITEM_SPACING = '25%';

const stories = storiesOf('Popover', module);

stories.add('All states', () => (
  <>
    <Heading>Popover</Heading>

    <div
      style={{
        position: 'relative',
        height: '15rem',
        border: '1px dashed var(--color-brand-secondary--light)',
        borderRadius: 'var(--radius-m)',
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
  </>
));
