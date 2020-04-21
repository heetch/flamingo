import styled from 'styled-components';

import UiText from '../../../UiText';

const TableRowCell = styled(UiText).attrs(({ as }) => ({
  className: 'f-Table-RowCell',
  variant: UiText.VARIANTS.subContent,
  as: as || 'td',
}))`
  min-width: 8.4375rem; /* 135px */
  text-align: left;
  padding: var(--f-space--l) var(--f-space--xl);
  box-shadow: inset 0px -1px 0px var(--borderColor);
  background-color: var(--f-color-element--primary);
  color: var(--f-color-text--secondary);

  ${UiText} {
    margin: 0;
  }
`;

export default TableRowCell;
