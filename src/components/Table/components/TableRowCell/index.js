import styled from 'styled-components';

import UiText from '../../../UiText';
import { theme } from '../../../../theme';

const TableRowCell = styled(UiText).attrs(({ as }) => ({
  className: 'f-Table-RowCell',
  variant: UiText.VARIANTS.subContent,
  as: as || 'td',
}))`
  min-width: 8.4375rem; /* 135px */
  text-align: left;
  padding: ${theme.space.l} ${theme.space.xl};
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: ${theme.color.element.primary};

  ${UiText} {
    margin: 0;
    color: ${theme.color.text.primary};
  }
`;

export default TableRowCell;
