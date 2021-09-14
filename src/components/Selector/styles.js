import styled from 'styled-components/macro';
import UiText from '../UiText';
import { theme } from '../../theme';

const styles = {
  color({ isActive, isDisabled }) {
    if (isDisabled && isActive) return theme.color.text.white;
    if (isDisabled) return theme.color.text.secondary;
    if (isActive) return theme.color.text.white;

    return theme.color.text.secondary;
  },
  background({ isActive, isDisabled }) {
    if (isDisabled && isActive) return theme.color.brand.primaryInactive;
    if (isDisabled) return theme.color.element.inactive;
    if (isActive) return theme.color.brand.primary;

    return theme.color.element.primary;
  },
  borderColor({ isValid, isInvalid, isActive, isDisabled }) {
    if (isInvalid) return theme.color.element.error;
    if (isValid) return theme.color.element.success;
    if (isDisabled && isActive) return theme.color.brand.primaryInactive;
    if (isDisabled) return theme.color.element.tertiary;
    if (isActive) return theme.color.brand.primary;

    return theme.color.element.tertiary;
  },
  hover: {
    borderColor({ isDisabled }) {
      if (isDisabled) return theme.color.element.tertiary;

      return theme.color.text.secondary;
    },
  },
};

export const StyledSelector = styled(UiText).attrs(() => ({
  className: 'f-Selector',
}))`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  z-index: 0;
`;

export const SelectorItem = styled('div')`
  flex: 1;
  text-align: center;
  color: ${styles.color};
  border: 1px ${styles.borderColor} solid;
  border-right: none;
  background-color: ${styles.background};
  font-size: ${theme.fontSize.s};
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
  padding: ${theme.space.m} ${theme.space.xl};
  cursor: ${({ isDisabled }) =>
    isDisabled ? 'not-allowed !important' : 'pointer'};

  ${theme.breakPoint.s} {
    padding-top: ${theme.space.l};
    padding-bottom: ${theme.space.l};
  }

  &:first-child {
    border-radius: ${theme.borderRadius.xl} 0 0 ${theme.borderRadius.xl};
  }

  &:last-child {
    border-radius: 0 ${theme.borderRadius.xl} ${theme.borderRadius.xl} 0;
    border-right: 1px ${styles.borderColor} solid;
    margin: 0;
  }

  &:hover,
  &:focus {
    border-color: ${styles.hover.borderColor};
    border-right: ${({ isDisabled }) =>
      !isDisabled && `1px ${theme.color.text.secondary} solid`};
    z-index: 1;
  }
`;
