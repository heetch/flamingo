import styled, { css } from 'styled-components';

import { theme } from '../../theme';

export const TabsContainer = styled.div.attrs(() => ({
  className: 'f-TabsContainer',
}))`
  position: relative;
`;

export const StyledTabs = styled.div`
  white-space: nowrap;
  overflow-x: auto;

  background-image: linear-gradient(
      to right,
      ${theme.color.element.primary},
      ${theme.color.element.primary}
    ),
    linear-gradient(
      to right,
      ${theme.color.element.primary},
      ${theme.color.element.primary}
    ),
    linear-gradient(to right, rgba(25, 1, 52, 0.14), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(25, 1, 52, 0.14), rgba(255, 255, 255, 0));

  background-position: left center, right center, left top, right top;
  background-repeat: no-repeat;
  background-color: ${theme.color.element.primary};
  background-size: 15px 100%, 15px 100%,
    ${theme.space.m} calc(100% - ${theme.space.s}),
    ${theme.space.m} calc(100% - ${theme.space.s});
  background-attachment: local, local, scroll, scroll;
  padding: 0 2px;

  &:before,
  &:after {
    content: '';
    background-color: ${theme.color.element.primary};
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -1px;
  }
  &:after {
    right: -1px;
  }
`;

export const TabsLabel = styled.span`
  display: block;
  color: ${theme.color.text.primary};
  font-size: ${theme.fontSize.s}
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.m};
  margin: ${theme.space.m} 0;
  padding: 0 ${theme.space.xl};
`;

export const TabsMarker = styled.span`
  float: left;
  width: 100%;
  height: ${theme.space.s};
  margin: 1px 0;
  background-color: ${theme.color.element.inactive};
  transition: all 0.1s ease-out;

  ${({ isActive }) =>
    isActive &&
    css`
      height: calc(${theme.space.s} + 2px);
      padding: 1px 0;
      margin: 0;
      background-color: ${theme.color.brand.primary};
      border-radius: 3px;
    `}
`;

export const Tab = styled('button')`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover ${TabsMarker} {
    background-color: ${theme.color.brand.primary};
  }

  &:nth-child(1) ${TabsMarker} {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child ${TabsMarker} {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
