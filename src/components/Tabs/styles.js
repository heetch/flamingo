import styled, { css } from 'styled-components';

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
      var(--f-color-element--primary),
      var(--f-color-element--primary)
    ),
    linear-gradient(
      to right,
      var(--f-color-element--primary),
      var(--f-color-element--primary)
    ),
    linear-gradient(to right, rgba(25, 1, 52, 0.14), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(25, 1, 52, 0.14), rgba(255, 255, 255, 0));

  background-position: left center, right center, left top, right top;
  background-repeat: no-repeat;
  background-color: var(--f-color-element--primary);
  background-size: 15px 100%, 15px 100%,
    var(--f-space--m) calc(100% - var(--f-space--s)),
    var(--f-space--m) calc(100% - var(--f-space--s));
  background-attachment: local, local, scroll, scroll;
  padding: 0 2px;

  &:before,
  &:after {
    content: '';
    background-color: var(--f-color-element--primary);
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
  color: var(--f-color-text--primary);
  font-size: var(--f-fontSize--s);
  font-weight: var(--f-fontWeight--bold);
  line-height: var(--f-lineHeight--m);
  margin: var(--f-space--m) 0;
  padding: 0 var(--f-space--xl);
`;

export const TabsMarker = styled.span`
  float: left;
  width: 100%;
  height: var(--f-space--s);
  margin: 1px 0;
  background-color: var(--f-color-element--inactive);
  transition: all 0.1s ease-out;

  ${({ isActive }) =>
    isActive &&
    css`
      height: calc(var(--f-space--s) + 2px);
      padding: 1px 0;
      margin: 0;
      background-color: var(--f-color-brandPrimary);
      border-radius: 3px;
    `}
`;

export const Tab = styled('button')`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover ${TabsMarker} {
    background-color: var(--f-color-brandPrimary);
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
