import styled from 'styled-components/macro';

import UiText from '../UiText';
import Icon from '../Icon';
import { theme } from '../../theme';

const styles = {
  color({ isSortable, isSorted }) {
    if (isSortable && !isSorted) return theme.color.brand.secondary;
    if (isSorted) return theme.color.brand.primary;

    return undefined;
  },
};

export const StyledTable = styled('table').attrs(() => ({
  className: 'f-Table',
}))`
  --borderColor: ${theme.color.element.inactive};
  width: 100%;
  border-spacing: 0;
  margin: ${theme.space.m} 0;
  .f-Table-RowGroup {
    &:hover {
      .f-Table-RowCell {
        background-color: ${theme.color.text.lightGrey};
      }
    }
  }
`;

export const HeaderCell = styled(UiText)`
  text-align: left;
  padding: ${theme.space.l} ${theme.space.xl};
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: ${theme.color.element.primary};
  color: ${styles.color};
  padding-right: calc(${theme.iconSize.m} + ${theme.space.m} * 2);
  position: sticky;
  top: 0;
  cursor: ${props => props.disableSortBy && 'default'};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};

  ${UiText} {
    margin: 0;
  }
`;

export const HeaderCellIcon = styled(Icon)`
  position: absolute;
  right: ${theme.space.m};
  top: 50%;
  transform: translateY(-50%);
  color: ${styles.color};
`;
