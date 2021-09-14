import styled from 'styled-components/macro';
import UiText from '../UiText';
import Card from '../Card';
import IconButton from '../IconButton';

import { theme } from '../../theme';

export const Title = styled(UiText)`
  display: inline;
  margin-right: ${theme.space.xl};
`;

export const Subtitle = styled(UiText)`
  color: ${theme.color.text.secondary};
`;

export const StyledSectionHeader = styled('div')`
  border-bottom: ${({ headerSeparator, isExpanded, expandable }) =>
    headerSeparator && (!expandable || isExpanded)
      ? `1px solid ${theme.color.element.inactive}`
      : 'none'};
  padding: 16px 24px ${({ isExpanded }) => (isExpanded ? '8px' : '16px')};
  ${({ expandable }) => expandable && `padding-right: 48px;`}
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  ${IconButton} {
    position: absolute;
    right: 20px;
    &:hover {
      background-color: inherit;
      color: unset;
    }
  }
`;

export const CardContainer = styled(Card)`
  padding: 0;

  & + & {
    margin-top: 3rem;
  }
`;

export const SectionContentWrapper = styled('div')`
  ${({ visible }) =>
    visible
      ? ` padding: 24px; `
      : `
height: 0;
visibility: hidden;
overflow: hidden;
`}
`;
