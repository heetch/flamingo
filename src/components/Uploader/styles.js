import styled from 'styled-components';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import Icon from '../Icon';
import UiText from '../UiText';

import { theme } from '../../theme';
import { STATES } from './constants';

const styles = {
  height({ state }) {
    if (state === STATES.FILES) return 'auto';
    return 'var(--f-FileUploader-height);';
  },

  textColor({ invalid, valid }) {
    if (invalid) return theme.color.element.error;
    if (valid) return theme.color.element.success;
    return theme.color.text.secondary;
  },
  hoverTextColor({ state }) {
    if (state !== STATES.LOADING) return theme.color.brand.primary;
    return theme.color.text.secondary;
  },

  borderColor({ invalid, valid, state }) {
    if (state === STATES.FILES) return 'transparent';
    if (invalid) return theme.color.element.error;
    if (valid) return theme.color.element.success;
    return theme.color.element.tertiary;
  },
  hoverBorderColor({ state }) {
    if (state === STATES.FILES) return 'transparent';
    if (state === STATES.LOADING) return theme.color.brand.tertiary;
    return theme.color.brand.primary;
  },
};

export const InputContainer = styled.div`
  display: none;
`;

export const State = styled(UiText).attrs(({ as = 'div' }) => ({
  as,
  variant: UiText.VARIANTS.subContentBold,
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${props => (props.htmlFor ? 'pointer' : 'default')};
  padding: ${theme.space.l};

  ${Icon} {
    margin-bottom: ${theme.space.s};
  }
`;

export const Preview = styled.div`
  position: absolute;
  /* -1px to cover border */
  top: -1px;
  right: -1px;
  left: -1px;
  bottom: -1px;
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;
  z-index: 10;
  background-image: url(${({ preview }) => preview});
`;

export const PreviewActions = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  left: -1px;
  bottom: -1px;
  border-radius: 1rem;
  background: rgba(25, 1, 52, 0.8); /* --f-color-text--primary */
  padding: 0 ${theme.space.m};
  text-align: right;
  opacity: 0;
  pointer-events: none;
  z-index: 15;
  transition: opacity 0.1s ease-out;
`;

export const Container = styled(FormElementWrapper)`
  position: relative;
  width: 100%;
  min-height: ${styles.height};
  flex-direction: column;
  margin: ${theme.space.m} 0;
  border-radius: ${theme.borderRadius.l};
  color: ${styles.textColor};
  background-color: ${theme.color.element.primary};
  transition: all 0.15s ease-out;
  border: 1px dashed ${styles.borderColor};

  &:hover {
    border-color: ${styles.hoverBorderColor};
    color: ${styles.hoverTextColor};
  }

  &:hover ${PreviewActions} {
    opacity: 1;
    pointer-events: initial;
  }
`;
