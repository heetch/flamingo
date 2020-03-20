import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './index';
import Button from '../Button';
import Heading from '../Heading';
import Item from '../Item';

const stories = storiesOf('Dropdown', module);

stories.add('Playground', () => (
  <>
    <Heading>Dropdown</Heading>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        height: '11rem',
        padding: '1rem',
        border: '1px dashed var(--f-color-brandSecondary--light)',
        borderRadius: 'var(--f-borderRadius--m)',
      }}
    >
      <Dropdown
        isOpen
        triggerer={({ ref, toggle }) => (
          <Button ref={ref} onClick={toggle}>
            Click me
          </Button>
        )}
      >
        {({ hide }) => (
          <>
            <Item
              onClick={() => {
                action('onItemClick');
                hide();
              }}
            >
              Batman
            </Item>
            <Item
              onClick={() => {
                action('onItemClick');
                hide();
              }}
            >
              Robin
            </Item>
          </>
        )}
      </Dropdown>
    </div>
  </>
));
