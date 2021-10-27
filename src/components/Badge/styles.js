import styled from 'styled-components/macro';
import { theme } from '../../theme';

export const RoundedBadge = styled.div`
  display: inline-block;
  border-radius: ${({ borderRadius }) => borderRadius || theme.borderRadius.s};
  padding: 2px 10px;
  color: ${({ color }) => color || theme.color.text.primary};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.color.element.primary};
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.s};
  font-weight: ${({ fontWeight }) => fontWeight || theme.fontWeight.normal};
`;
