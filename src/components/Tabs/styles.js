import styled, { css } from 'styled-components';

import { theme } from '../../theme';

export const TabsContainer = styled.div.attrs(() => ({
  className: 'f-TabsContainer',
}))`
  position: relative;
  font-family: Avenir;
`;

export const TabsLabel = styled.span`
  display: block;
  color: ${({ isActive }) =>
    isActive ? theme.color.brand.primary : theme.color.text.primary};
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.black};
  line-height: ${theme.lineHeight.s};
  margin: ${theme.space.m} 0;
  &:hover {
    color: ${theme.color.brand.primary};
  }
`;

export const TabsMarker = styled.span`
  float: left;
  width: 100%;
  height: ${theme.space.xs};
  margin: 1px 0;
  background-color: ${theme.color.element.inactive};
  transition: all 0.1s ease-out;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${theme.color.brand.primary};
    `}
`;

export const Tab = styled('button')`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  max-width: 250px;
  width: 100%;
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
