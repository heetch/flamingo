import styled from 'styled-components';

import UiText from '../../../UiText';
import { theme } from '../../../../theme';

const TableRowCell = styled(UiText).attrs(({ as }) => ({
  className: 'f-Table-RowCell',
  variant: UiText.VARIANTS.subContent,
  as: as || 'td',
}))`
  text-align: left;
  padding: ${theme.space.l} ${theme.space.xl};
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: ${theme.color.element.primary};
  color: ${theme.color.text.secondary};

  ${UiText} {
    margin: 0;
  }
`;

export default TableRowCell;
