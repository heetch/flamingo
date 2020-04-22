import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import Spinner from '../Spinner';

const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const VARIANTS = {
  OUTLINE: 'outline',
  MINIMAL: 'minimal',
};

const intents = Object.values(INTENTS);
const variants = Object.values(VARIANTS);

const hasVariant = variant => variants.includes(variant);
const isOutline = variant => variant === VARIANTS.OUTLINE;
const isPrimary = intent => intent === INTENTS.PRIMARY;
const isSecondary = intent => intent === INTENTS.SECONDARY;

const styles = {
  color({ disabled, variant, intent, theme: { color } }) {
    if (disabled) return `${color.text.tertiary} !important`;
    if (!hasVariant(variant)) return color.text.white;
    if (isPrimary(intent)) return color.brand.primary;
    if (isSecondary(intent)) return color.brand.secondary;
    return color.text.white;
  },
  backgroundColor({ intent, disabled, variant, theme: { color } }) {
    if (disabled) return `${color.element.primary} !important`;
    if (hasVariant(variant)) return color.text.white;
    if (isPrimary(intent)) return color.brand.primary;
    if (isSecondary(intent)) return color.brand.secondary;
    return undefined;
  },
  boxShadow({ intent, variant, disabled, theme: { color } }) {
    const shape = '0 0 0 1px';
    if (disabled || !isOutline(variant)) return undefined;
    if (isPrimary(intent)) return `${shape} ${color.brand.primary}`;
    if (isSecondary(intent)) return `${shape} ${color.brand.secondary}`;
    return undefined;
  },
  cursor({ disabled, isLoading }) {
    if (disabled) return 'not-allowed !important';
    if (isLoading) return undefined; // Don't add cursor value, use default.
    return 'pointer';
  },
  hover: {
    backgroundColor({ intent, theme: { color } }) {
      if (isPrimary(intent)) return color.brand.primaryLight;
      if (isSecondary(intent)) return color.brand.secondaryLight;
      return undefined;
    },
  },
  active: {
    backgroundColor({ intent, theme: { color } }) {
      if (isPrimary(intent)) return color.brand.primary;
      if (isSecondary(intent)) return color.brand.secondary;
      return undefined;
    },
  },
};

export const Content = styled.span`
  opacity: ${({ isLoading }) => isLoading && 0};
  pointer-events: ${({ isLoading }) => isLoading && 'none'};
`;

export const SpinnerContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(
  ({ isLoading, children, margin, intent, variant, ...props }) => (
    <button {...props}>
      {isLoading && (
        <SpinnerContainer>
          <Spinner size={Icon.SIZES.L} />
        </SpinnerContainer>
      )}
      <Content isLoading={isLoading}>{children}</Content>
    </button>
  ),
).attrs(() => ({
  className: 'f-Button',
}))`
  position: relative;
  display: inline-block;
  margin: ${({ margin, theme }) => margin ?? `${theme.space.m} 0`};
  padding: ${({ theme }) => `${theme.space.m} ${theme.space.xl}`};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  border: 0;
  border-radius: ${({ theme }) => theme.space.xxl};
  outline: none;
  transition: background-color 0.2s ease-out;
  cursor: ${styles.cursor};
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  box-shadow: ${styles.boxShadow};

  &:hover {
    background-color: ${styles.hover.backgroundColor};
    color: ${({ theme }) => theme.color.text.white};
  }

  &:active {
    background-color: ${styles.active.backgroundColor};
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    width: 100%;
    padding: ${({ theme }) => `${theme.space.l} ${theme.space.xl}`};
    text-align: center;
  }
`;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  margin: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  intent: INTENTS.PRIMARY,
  isLoading: false,
  type: 'button',
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
