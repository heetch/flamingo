import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Dropdown from '.';
import Button from '../Button';
import Heading from '../Heading';
import Item from '../Item';
import { theme } from '../../theme';

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem;
  border: 1px dashed ${theme.color.brand.secondaryLight};
  border-radius: ${theme.borderRadius.m};
`;

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

    <Heading level={2}>Using portal</Heading>

    <DropdownContainer>
      <StoryDropdown portalNode={document.body} />
    </DropdownContainer>

    <Heading level={2}>With modifiers</Heading>
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

    <Heading level={2}>With different positions</Heading>

    <Heading level={3}>Top End</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'top-end'} />
    </DropdownContainer>

    <Heading level={3}>Left</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'left'} />
    </DropdownContainer>

    <Heading level={3}>Right Start</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'right-start'} />
    </DropdownContainer>
  </>
));
