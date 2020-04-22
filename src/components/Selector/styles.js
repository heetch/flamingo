import styled from 'styled-components';
import UiText from '../UiText';

const styles = {
  color({ isActive, isDisabled }) {
    if (isDisabled && isActive) return 'var(--f-color-text--white)';
    if (isDisabled) return 'var(--f-color-text--secondary)';
    if (isActive) return 'var(--f-color-text--white)';

    return 'var(--f-color-text--secondary)';
  },
  background({ isActive, isDisabled }) {
    if (isDisabled && isActive) return 'var(--f-color-brandPrimary--inactive)';
    if (isDisabled) return 'var(--f-color-element--inactive)';
    if (isActive) return 'var(--f-color-brandPrimary)';

    return 'var(--f-color-element--primary)';
  },
  borderColor({ isValid, isInvalid, isActive, isDisabled }) {
    if (isInvalid) return 'var(--f-color-element--error)';
    if (isValid) return 'var(--f-color-element--success)';
    if (isDisabled && isActive) return 'var(--f-color-brandPrimary--inactive)';
    if (isDisabled) return 'var(--f-color-element--tertiary)';
    if (isActive) return 'var(--f-color-brandPrimary)';

    return 'var(--f-color-element--tertiary)';
  },
  hover: {
    borderColor({ isDisabled }) {
      if (isDisabled) return 'var(--f-color-element--tertiary)';

      return 'var(--f-color-text--secondary)';
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
  font-size: var(--f-fontSize--s);
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
  padding: var(--f-space--m) var(--f-space--xl);
  cursor: ${({ isDisabled }) =>
    isDisabled ? 'not-allowed !important' : 'pointer'};

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    padding-top: var(--f-space--l);
    padding-bottom: var(--f-space--l);
  }

  &:first-child {
    border-radius: var(--f-borderRadius--xl) 0 0 var(--f-borderRadius--xl);
  }

  &:last-child {
    border-radius: 0 var(--f-borderRadius--xl) var(--f-borderRadius--xl) 0;
    border-right: 1px ${styles.borderColor} solid;
    margin: 0;
  }

  &:hover,
  &:focus {
    border-color: ${styles.hover.borderColor};
    border-right: ${({ isDisabled }) =>
      !isDisabled && `1px var(--f-color-text--secondary) solid`};
    z-index: 1;
  }
`;
