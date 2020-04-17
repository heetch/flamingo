import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from '.';
import Button from '../Button';
import Heading from '../Heading';
import Item from '../Item';

const DropdownContainer = props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      padding: '1rem',
      border: '1px dashed var(--f-color-brandSecondary--light)',
      borderRadius: 'var(--f-borderRadius--m)',
    }}
    {...props}
  />
);

const StoryDropdown = props => (
  <Dropdown
    onHide={action('onHide')}
    onOpen={action('onOpen')}
    triggerer={({ ref, toggle }) => (
      <Button ref={ref} onClick={toggle}>
        Click me
      </Button>
    )}
    {...props}
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
);

const stories = storiesOf('Dropdown', module);

stories.add('Playground', () => (
  <>
    <Heading>Dropdown</Heading>

    <DropdownContainer>
      <StoryDropdown />
    </DropdownContainer>

    <Heading>Using portal</Heading>

    <DropdownContainer>
      <StoryDropdown portalNode={document.body} />
    </DropdownContainer>

    <Heading>With modifiers</Heading>
    <DropdownContainer>
      <StoryDropdown
        modifiers={{
          preventOverflow: {
            enabled: false,
          },
        }}
        portalNode={document.body}
      />
    </DropdownContainer>
  </>
));
