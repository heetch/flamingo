import styled, { css } from 'styled-components/macro';

import { theme } from '../../theme';

export const TabsContainer = styled.div.attrs(() => ({
  className: 'f-TabsContainer',
}))`
  position: relative;
  font-family: Avenir;
  display: flex;
  align-items: flex-end;
`;

export const TabsLabel = styled.span`
  display: block;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.black};
  line-height: ${theme.lineHeight.s};
  margin: ${theme.space.m} 0;
  min-width: 80px;
  max-width: 100%;
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
  overflow-wrap: break-word;
  &:hover ${TabsMarker} {
    background-color: ${theme.color.brand.primary};
  }
  color: ${({ isActive }) =>
    isActive ? theme.color.brand.primary : theme.color.text.primary};
  &:hover,
  &:active {
    color: ${theme.color.brand.primary};
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
