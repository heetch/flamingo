import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Dropdown from '.';
import Button from '../Button';
import StoryHeading from '../StoryHeading/StoryHeading';
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
    <StoryHeading>Dropdown</StoryHeading>

    <DropdownContainer>
      <StoryDropdown />
    </DropdownContainer>

    <StoryHeading level={2}>Using portal</StoryHeading>

    <DropdownContainer>
      <StoryDropdown portalNode={document.body} />
    </DropdownContainer>

    <StoryHeading level={2}>With modifiers</StoryHeading>
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

    <StoryHeading level={2}>With different positions</StoryHeading>

    <StoryHeading level={3}>Top End</StoryHeading>
    <DropdownContainer>
      <StoryDropdown placement={'top-end'} />
    </DropdownContainer>

    <StoryHeading level={3}>Left</StoryHeading>
    <DropdownContainer>
      <StoryDropdown placement={'left'} />
    </DropdownContainer>

    <StoryHeading level={3}>Right Start</StoryHeading>
    <DropdownContainer>
      <StoryDropdown placement={'right-start'} />
    </DropdownContainer>
  </>
));
