import styled from 'styled-components';

import UiText from '../UiText';
import Icon from '../Icon';
import { theme } from '../../theme';

export const StyledTable = styled('table').attrs(() => ({
  className: 'f-Table',
}))`
  --borderColor: ${theme.color.element.inactive};

  width: 100%;
  border-spacing: 0;
  margin: ${theme.space.m} 0;
`;

export const HeaderCell = styled(UiText)`
  min-width: 8.4375rem; /* 135px */
  text-align: left;
  padding: ${theme.space.l} ${theme.space.xl};
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: ${theme.color.element.primary};
  padding-right: calc(${theme.iconSize.m} + ${theme.space.m} * 2);
  position: sticky;
  top: 0;

  ${UiText} {
    margin: 0;
  }
`;

export const HeaderCellIcon = styled(Icon)`
  position: absolute;
  right: ${theme.space.m};
  top: 50%;
  transform: translateY(-50%);
`;
