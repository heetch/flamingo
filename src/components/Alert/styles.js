import styled from 'styled-components';
import IconButton from '../IconButton';
import { theme } from '../../theme';

const styles = {
  color({ alertType }) {
    if (alertType === 'error') return theme.color.element.error;
    if (alertType === 'success') return theme.color.element.success;
    if (alertType === 'information') return theme.color.brand.secondary;

    return undefined;
  },
};

export const StyledAlert = styled('div').attrs(() => ({
  className: 'f-Alert',
}))`
  --iconSize: ${({ iconSize }) => iconSize || theme.iconSize.m};
  text-align: left;
  position: relative;
  margin: ${theme.space.m} 0;
  padding: ${theme.space.xl}
    calc(${theme.space.m} * 2 + var(--iconSize) + ${theme.space.xl});
  font-size: ${theme.fontSize.m};
  line-height: ${theme.lineHeight.m};
  border-radius: ${theme.space.m};
  background-color: ${theme.color.element.primary};
  border: 2px solid ${styles.color};
`;

export const AlertIcon = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0 ${theme.space.m};
  color: ${theme.color.icon.white};
  background-color: ${styles.color};
`;

export const CloseButton = styled(IconButton)`
  width: initial;
  position: absolute;
  top: ${theme.space.s};
  right: ${theme.space.s};
  cursor: pointer;
  margin: 0;
`;
