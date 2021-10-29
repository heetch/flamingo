import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components/macro';

import Dropdown from '.';
import Button from '../Button';
import Heading from '../Heading';
import Item from '../Item';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: baseline;
  align-items: center;
  padding: 1rem;
  border: 1px dashed ${theme.color.brand.secondaryLight};
  border-radius: ${theme.borderRadius.s};
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

stories.add('All states', () => (
  <>
    <Heading>Dropdown</Heading>

    <DropdownContainer>
      <StoryDropdown />
      <Code>{`
      <Dropdown
        onHide={noop}
        onOpen={noop}
        triggerer={({ ref, toggle }) => (
          <Button ref={ref} onClick={toggle}>Click me</Button>
        )}
      >
        {({ hide }) => (
          <>
            <Item onClick={() => { callBatman(); hide(); }}>Batman</Item>
            <Item onClick={() => { callRobin(); hide(); }}>Robin</Item>
          </>
        )}
      </Dropdown>
      `}</Code>
    </DropdownContainer>

    <Heading level={2}>Using portal</Heading>

    <DropdownContainer>
      <StoryDropdown portalNode={document.body} />
      <Code>{`
      <Dropdown {...otherProps} portalNode={document.body}>{...items}</Dropdown>
      `}</Code>
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
      <Code>{`
      <Dropdown
        {...otherProps}
        modifiers={{ preventOverflow: { enabled: false } }}
        portalNode={document.body}
      >
        {...items}
      </Dropdown>
      `}</Code>
    </DropdownContainer>

    <Heading level={2}>With different positions</Heading>

    <Heading level={3}>Top End</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'top-end'} />
      <Code>{`
      <Dropdown {...otherProps} placement='top-end'>{...items}</Dropdown>
      `}</Code>
    </DropdownContainer>

    <Heading level={3}>Left</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'left'} />
      <Code>{`
      <Dropdown {...otherProps} placement='left'>{...items}</Dropdown>
      `}</Code>
    </DropdownContainer>

    <Heading level={3}>Right Start</Heading>
    <DropdownContainer>
      <StoryDropdown placement={'right-start'} />
      <Code>{`
      <Dropdown {...otherProps} placement='right-start'>{...items}</Dropdown>
      `}</Code>
    </DropdownContainer>
  </>
));
