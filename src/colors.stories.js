import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Heading } from './components';
import { theme } from './theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 80px;
`;

const Blocks = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  grid-row-gap: 18px;
`;

const Block = styled.div`
  min-height: 80px;
  padding: 18px 24px;
  background-color: ${props => props.color || 'transparent'};
  color: ${props =>
    props.isLight ? theme.color_v3.type.default : theme.color_v3.type.reverse};
  ${props =>
    props.cols
      ? css`
          grid-column-end: span ${props.cols};
        `
      : ''}
  ${props =>
    props.hasBorder
      ? css`
          border: 2px solid ${theme.color_v3.type.inactive};
        `
      : ''}
`;

// eslint-disable-next-line react/prop-types
const BlockTitle = styled.h4`
  color: currentColor;
  font-family: MarkOT-Ultra;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

const stories = storiesOf('Design System/Colors', module);

stories.add('Interface colors', () => (
  <Wrapper>
    <Blocks cols={3}>
      <Heading level={2} style={{ gridColumn: '1 / span 3' }}>
        Passenger
      </Heading>

      <Block color={theme.color_v3.bg.passenger} cols={3}>
        <BlockTitle>BG/Passenger</BlockTitle>
        <p>theme.color_v3.bg.passenger</p>
        <p>theme.color_v3.passenger.bg</p>
      </Block>

      <Block color={theme.color_v3.passenger.type.title}>
        <BlockTitle>Type/Title-Passenger</BlockTitle>
        <p>theme.color_v3.type.passenger.title</p>
        <p>theme.color_v3.passenger.type.title</p>
      </Block>
      <Block color={theme.color_v3.passenger.type.section}>
        <BlockTitle>Type/Section-Passenger</BlockTitle>
        <p>theme.color_v3.type.passenger.section</p>
        <p>theme.color_v3.passenger.type.section</p>
      </Block>
      <Block color={theme.color_v3.passenger.type.highlight} isLight>
        <BlockTitle>Type/Highlight-Passenger</BlockTitle>
        <p>theme.color_v3.type.passenger.highlight</p>
        <p>theme.color_v3.passenger.type.highlight</p>
      </Block>

      <Block color={theme.color_v3.passenger.ui.primary}>
        <BlockTitle>UI/Primary-Passenger</BlockTitle>
        <p>theme.color_v3.ui.passenger.primary</p>
        <p>theme.color_v3.passenger.ui.primary</p>
      </Block>
      <Block color={theme.color_v3.passenger.ui.secondary}>
        <BlockTitle>UI/Secondary1-Passenger</BlockTitle>
        <p>theme.color_v3.ui.passenger.secondary</p>
        <p>theme.color_v3.passenger.ui.secondary</p>
      </Block>
      <Block color={theme.color_v3.passenger.ui.secondary2} isLight>
        <BlockTitle>UI/Secondary2-Passenger</BlockTitle>
        <p>theme.color_v3.passenger.ui.secondary2</p>
      </Block>
    </Blocks>

    <Blocks cols={6}>
      <Heading level={2} style={{ gridColumn: '1 / span 6' }}>
        Driver
      </Heading>

      <Block color={theme.color_v3.bg.driver} cols={6}>
        <BlockTitle>BG/Driver</BlockTitle>
        <p>theme.color_v3.bg.driver</p>
        <p>theme.color_v3.driver.bg</p>
      </Block>

      <Block color={theme.color_v3.driver.type.title} cols={3}>
        <BlockTitle>Type/Title-Driver</BlockTitle>
        <p>theme.color_v3.type.driver.title</p>
        <p>theme.color_v3.driver.type.title</p>
      </Block>
      <Block color={theme.color_v3.driver.type.highlight} cols={3} isLight>
        <BlockTitle>Type/Highlight-Driver</BlockTitle>
        <p>theme.color_v3.type.driver.highlight</p>
        <p>theme.color_v3.driver.type.highlight</p>
      </Block>

      <Block color={theme.color_v3.driver.ui.primary} cols={3}>
        <BlockTitle>UI/Primary-Driver</BlockTitle>
        <p>theme.color_v3.ui.driver.primary</p>
        <p>theme.color_v3.driver.ui.primary</p>
      </Block>
      <Block color={theme.color_v3.driver.ui.secondary} cols={3}>
        <BlockTitle>UI/Secondary-Driver</BlockTitle>
        <p>theme.color_v3.ui.driver.secondary</p>
        <p>theme.color_v3.driver.ui.secondary</p>
      </Block>

      <Block color={theme.color_v3.driver.ui.reward.gold} cols={2} isLight>
        <BlockTitle>Driver Rewards/Gold</BlockTitle>
        <p>theme.color_v3.driver.ui.reward.gold</p>
      </Block>
      <Block color={theme.color_v3.driver.ui.reward.silver} cols={2} isLight>
        <BlockTitle>Driver Rewards/Silver</BlockTitle>
        <p>theme.color_v3.driver.ui.reward.silver</p>
      </Block>
      <Block color={theme.color_v3.driver.ui.reward.bronze} cols={2} isLight>
        <BlockTitle>Driver Rewards/Bronze</BlockTitle>
        <p>theme.color_v3.driver.ui.reward.bronze</p>
      </Block>
    </Blocks>

    <Blocks cols={6}>
      <Heading level={2} style={{ gridColumn: '1 / span 6' }}>
        Shared
      </Heading>

      <Block color={theme.color_v3.bg.primary} cols={3} isLight>
        <BlockTitle>BG/Primary</BlockTitle>
        <p>theme.color_v3.bg.primary</p>
      </Block>
      <Block color={theme.color_v3.bg.secondary} cols={3} isLight>
        <BlockTitle>BG/Secondary</BlockTitle>
        <p>theme.color_v3.bg.secondary</p>
      </Block>

      <Block color={theme.color_v3.ui.default} cols={2}>
        <BlockTitle>UI/Default</BlockTitle>
        <p>theme.color_v3.ui.default</p>
      </Block>
      <Block color={theme.color_v3.ui.reverse} cols={2} isLight>
        <BlockTitle>UI/Reverse</BlockTitle>
        <p>theme.color_v3.ui.reverse</p>
      </Block>
      <Block color={theme.color_v3.ui.tertiary} cols={2} isLight>
        <BlockTitle>UI/Tertiary</BlockTitle>
        <p>theme.color_v3.ui.tertiary</p>
      </Block>

      <Block color={theme.color_v3.type.default}>
        <BlockTitle>Type/Default</BlockTitle>
        <p>theme.color_v3.type.default</p>
      </Block>
      <Block color={theme.color_v3.type.dark}>
        <BlockTitle>Type/Dark</BlockTitle>
        <p>theme.color_v3.type.dark</p>
      </Block>
      <Block color={theme.color_v3.type.light} isLight>
        <BlockTitle>Type/Light</BlockTitle>
        <p>theme.color_v3.type.light</p>
      </Block>
      <Block color={theme.color_v3.type.inactive} isLight>
        <BlockTitle>Type/Inactive</BlockTitle>
        <p>theme.color_v3.type.inactive</p>
      </Block>
      <Block color={theme.color_v3.type.reverse} isLight>
        <BlockTitle>Type/Reverse</BlockTitle>
        <p>theme.color_v3.type.reverse</p>
      </Block>
      <Block color={theme.color_v3.type.reverseLight} isLight>
        <BlockTitle>Type/Reverse-Light</BlockTitle>
        <p>theme.color_v3.type.reverseLight</p>
      </Block>

      <Block color={theme.color_v3.ride.approach}>
        <BlockTitle>Ride/Approach</BlockTitle>
        <p>theme.color_v3.ride.approach</p>
      </Block>
      <Block color={theme.color_v3.ride.departure}>
        <BlockTitle>Ride/Departure</BlockTitle>
        <p>theme.color_v3.ride.departure</p>
      </Block>
      <Block color={theme.color_v3.ride.arrival}>
        <BlockTitle>Ride/Arrival</BlockTitle>
        <p>theme.color_v3.ride.arrival</p>
      </Block>
      <Block color={theme.color_v3.ride.trip} isLight>
        <BlockTitle>Ride/Trip</BlockTitle>
        <p>theme.color_v3.ride.trip</p>
      </Block>
      <Block color={theme.color_v3.ride.stopover} isLight>
        <BlockTitle>Ride/Stopover</BlockTitle>
        <p>theme.color_v3.ride.stopover</p>
      </Block>
      <Block color={theme.color_v3.ride.gms} isLight>
        <BlockTitle>Ride/GMS</BlockTitle>
        <p>theme.color_v3.ride.gms</p>
      </Block>

      <Block color={theme.color_v3.feedback.success} cols={2}>
        <BlockTitle>Feedback/Success</BlockTitle>
        <p>theme.color_v3.feedback.success</p>
      </Block>
      <Block color={theme.color_v3.feedback.ok} cols={2} isLight>
        <BlockTitle>Feedback/Ok</BlockTitle>
        <p>theme.color_v3.feedback.ok</p>
      </Block>
      <Block color={theme.color_v3.feedback.error} cols={2}>
        <BlockTitle>Feedback/Error</BlockTitle>
        <p>theme.color_v3.feedback.error</p>
      </Block>

      <Block color={theme.color_v3.thirdparty.apple} cols={3}>
        <BlockTitle>Third Party/Apple</BlockTitle>
        <p>theme.color_v3.thirdparty.apple</p>
      </Block>
      <Block color={theme.color_v3.thirdparty.facebook} cols={3}>
        <BlockTitle>Third Party/Facebook</BlockTitle>
        <p>theme.color_v3.thirdparty.facebook</p>
      </Block>
    </Blocks>
  </Wrapper>
));

stories.add('Brand colors', () => (
  <Wrapper>
    <Blocks cols={3}>
      <Heading level={2} style={{ gridColumn: '1 / span 3' }}>
        Shades
      </Heading>

      <Block color={theme.color_v3.brand.pink.shade1}>
        <BlockTitle>Brand/Pink-Shade1</BlockTitle>
        <p>theme.color_v3.brand.pink.shade1</p>
      </Block>
      <Block color={theme.color_v3.brand.pink.shade2}>
        <BlockTitle>Brand/Pink-Shade2</BlockTitle>
        <p>theme.color_v3.brand.pink.shade2</p>
      </Block>
      <Block color={theme.color_v3.brand.pink.shade3} isLight>
        <BlockTitle>Brand/Pink-Shade3</BlockTitle>
        <p>theme.color_v3.brand.pink.shade3</p>
      </Block>

      <Block color={theme.color_v3.brand.navy.shade1}>
        <BlockTitle>Brand/Navy-Shade1</BlockTitle>
        <p>theme.color_v3.brand.navy.shade1</p>
      </Block>
      <Block color={theme.color_v3.brand.navy.shade2}>
        <BlockTitle>Brand/Navy-Shade2</BlockTitle>
        <p>theme.color_v3.brand.navy.shade2</p>
      </Block>
      <Block color={theme.color_v3.brand.navy.shade3} isLight>
        <BlockTitle>Brand/Navy-Shade3</BlockTitle>
        <p>theme.color_v3.brand.navy.shade3</p>
      </Block>
    </Blocks>

    <Blocks cols={4}>
      <Heading level={2} style={{ gridColumn: '1 / span 4' }}>
        Marketing
      </Heading>

      <Block color={theme.color_v3.palette.yellow.shade1} isLight>
        <BlockTitle>Brand/Yellow-1</BlockTitle>
        <p>theme.color_v3.palette.yellow.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.yellow.shade2} isLight>
        <BlockTitle>Brand/Yellow-2</BlockTitle>
        <p>theme.color_v3.palette.yellow.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.yellow.shade3} isLight>
        <BlockTitle>Brand/Yellow-3</BlockTitle>
        <p>theme.color_v3.palette.yellow.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.yellow.shade4} isLight>
        <BlockTitle>Brand/Yellow-4</BlockTitle>
        <p>theme.color_v3.palette.yellow.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.orange.shade1} isLight>
        <BlockTitle>Brand/Orange-1</BlockTitle>
        <p>theme.color_v3.palette.orange.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.orange.shade2} isLight>
        <BlockTitle>Brand/Orange-2</BlockTitle>
        <p>theme.color_v3.palette.orange.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.orange.shade3} isLight>
        <BlockTitle>Brand/Orange-3</BlockTitle>
        <p>theme.color_v3.palette.orange.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.orange.shade4}>
        <BlockTitle>Brand/Orange-4</BlockTitle>
        <p>theme.color_v3.palette.orange.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.red.shade1} isLight>
        <BlockTitle>Brand/Red-1</BlockTitle>
        <p>theme.color_v3.palette.red.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.red.shade2} isLight>
        <BlockTitle>Brand/Red-2</BlockTitle>
        <p>theme.color_v3.palette.red.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.red.shade3} isLight>
        <BlockTitle>Brand/Red-3</BlockTitle>
        <p>theme.color_v3.palette.red.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.red.shade4}>
        <BlockTitle>Brand/Red-4</BlockTitle>
        <p>theme.color_v3.palette.red.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.purple.shade1} isLight>
        <BlockTitle>Brand/Purple-1</BlockTitle>
        <p>theme.color_v3.palette.purple.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.purple.shade2} isLight>
        <BlockTitle>Brand/Purple-2</BlockTitle>
        <p>theme.color_v3.palette.purple.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.purple.shade3}>
        <BlockTitle>Brand/Purple-3</BlockTitle>
        <p>theme.color_v3.palette.purple.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.purple.shade4}>
        <BlockTitle>Brand/Purple-4</BlockTitle>
        <p>theme.color_v3.palette.purple.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.blue.shade1} isLight>
        <BlockTitle>Brand/Blue-1</BlockTitle>
        <p>theme.color_v3.palette.blue.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.blue.shade2} isLight>
        <BlockTitle>Brand/Blue-2</BlockTitle>
        <p>theme.color_v3.palette.blue.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.blue.shade3}>
        <BlockTitle>Brand/Blue-3</BlockTitle>
        <p>theme.color_v3.palette.blue.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.blue.shade4}>
        <BlockTitle>Brand/Blue-4</BlockTitle>
        <p>theme.color_v3.palette.blue.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.green.shade1} isLight>
        <BlockTitle>Brand/Green-1</BlockTitle>
        <p>theme.color_v3.palette.green.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.green.shade2} isLight>
        <BlockTitle>Brand/Green-2</BlockTitle>
        <p>theme.color_v3.palette.green.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.green.shade3} isLight>
        <BlockTitle>Brand/Green-3</BlockTitle>
        <p>theme.color_v3.palette.green.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.green.shade4}>
        <BlockTitle>Brand/Green-4</BlockTitle>
        <p>theme.color_v3.palette.green.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.cyan.shade1} isLight>
        <BlockTitle>Brand/Cyan-1</BlockTitle>
        <p>theme.color_v3.palette.cyan.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.cyan.shade2} isLight>
        <BlockTitle>Brand/Cyan-2</BlockTitle>
        <p>theme.color_v3.palette.cyan.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.cyan.shade3} isLight>
        <BlockTitle>Brand/Cyan-3</BlockTitle>
        <p>theme.color_v3.palette.cyan.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.cyan.shade4} isLight>
        <BlockTitle>Brand/Cyan-4</BlockTitle>
        <p>theme.color_v3.palette.cyan.shade4</p>
      </Block>

      <Block color={theme.color_v3.palette.grey.shade1} isLight>
        <BlockTitle>Brand/Grey-1</BlockTitle>
        <p>theme.color_v3.palette.grey.shade1</p>
      </Block>
      <Block color={theme.color_v3.palette.grey.shade2} isLight>
        <BlockTitle>Brand/Grey-2</BlockTitle>
        <p>theme.color_v3.palette.grey.shade2</p>
      </Block>
      <Block color={theme.color_v3.palette.grey.shade3} isLight>
        <BlockTitle>Brand/Grey-3</BlockTitle>
        <p>theme.color_v3.palette.grey.shade3</p>
      </Block>
      <Block color={theme.color_v3.palette.grey.shade4} isLight>
        <BlockTitle>Brand/Grey-4</BlockTitle>
        <p>theme.color_v3.palette.grey.shade4</p>
      </Block>
    </Blocks>
  </Wrapper>
));
