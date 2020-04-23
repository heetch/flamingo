import styled from 'styled-components';
import UiText from '../UiText';
import Icon from '../Icon';

export const StyledTable = styled('table').attrs(() => ({
  className: 'f-Table',
}))`
  --borderColor: var(--f-color-element--inactive);

  width: 100%;
  border-spacing: 0;
  margin: var(--f-space--m) 0;
`;

export const HeaderCell = styled(UiText)`
  min-width: 8.4375rem; /* 135px */
  text-align: left;
  padding: var(--f-space--l) var(--f-space--xl);
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: var(--f-color-element--primary);
  padding-right: calc(var(--f-iconSize--m) + var(--f-space--m) * 2);
  position: sticky;
  top: 0;

  ${UiText} {
    margin: 0;
  }
`;

export const HeaderCellIcon = styled(Icon)`
  position: absolute;
  right: var(--f-space--m);
  top: 50%;
  transform: translateY(-50%);
`;
