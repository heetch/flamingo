import styled from 'styled-components/macro';
import IconButton from '../IconButton';
import UiText from '../UiText';
import { theme } from '../../theme';

const styles = {
  backgroundColor({ alertType }) {
    if (alertType === 'error') return theme.color.element.error;
    if (alertType === 'success') return theme.color.element.success;
    if (alertType === 'information') return theme.color.element.tertiary;
    return undefined;
  },
  color({ alertType }) {
    if (alertType === 'information') return theme.color.text.primary;
    if (alertType === 'success' || alertType === 'error')
      return theme.color.text.white;

    return undefined;
  },
  linkColor({ alertType }) {
    if (alertType === 'information') return theme.color.text.link;
    if (alertType === 'success' || alertType === 'error')
      return theme.color.text.white;

    return undefined;
  },
};

export const StyledAlert = styled('div').attrs(() => ({
  className: 'f-Alert',
}))`
  text-align: left;
  position: relative;
  margin: 0;
  word-break: break-word;
  padding: ${theme.space.l} 2rem ${theme.space.l} ${theme.space.l};
  font-size: ${theme.fontSize.m};
  line-height: ${theme.lineHeight.m};
  border-radius: 5px;
  background-color: ${styles.backgroundColor};
  color: ${styles.color};
`;

export const StyledText = styled(UiText)`
  color: ${styles.color};
  margin: 0;
  > a {
    color: ${styles.linkColor};
    text-decoration: underline;
  }
`;

export const CloseButton = styled(IconButton)`
  width: initial;
  position: absolute;
  top: ${theme.space.l};
  right: ${theme.space.l};
  cursor: pointer;
  margin: 0;
  color: ${styles.color};
  &:hover {
    color: ${styles.color};
  }
`;
