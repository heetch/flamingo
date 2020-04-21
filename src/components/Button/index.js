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
  color({ disabled, variant, intent, theme: { colors } }) {
    if (disabled) return `${colors.text.tertiary} !important`;
    if (!hasVariant(variant)) return colors.text.white;
    if (isPrimary(intent)) return colors.brand.primary;
    if (isSecondary(intent)) return colors.brand.secondary;
    return colors.text.white;
  },
  backgroundColor({ intent, disabled, variant, theme: { colors } }) {
    if (disabled) return `${colors.element.primary} !important`;
    if (hasVariant(variant)) return colors.text.white;
    if (isPrimary(intent)) return colors.brand.primary;
    if (isSecondary(intent)) return colors.brand.secondary;
    return undefined;
  },
  boxShadow({ intent, variant, disabled, theme: { colors } }) {
    const shape = '0 0 0 1px';
    if (disabled || !isOutline(variant)) return undefined;
    if (isPrimary(intent)) return `${shape} ${colors.brand.primary}`;
    if (isSecondary(intent)) return `${shape} ${colors.brand.secondary}`;
    return undefined;
  },
  cursor({ disabled, isLoading }) {
    if (disabled) return 'not-allowed !important';
    if (isLoading) return undefined; // Don't add cursor value, use default.
    return 'pointer';
  },
  hover: {
    backgroundColor({ intent, theme: { colors } }) {
      if (isPrimary(intent)) return colors.brand.primaryLight;
      if (isSecondary(intent)) return colors.brand.secondaryLight;
      return undefined;
    },
  },
  active: {
    backgroundColor({ intent, theme: { colors } }) {
      if (isPrimary(intent)) return colors.brand.primary;
      if (isSecondary(intent)) return colors.brand.secondary;
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
  margin: ${({ margin, theme }) => margin ?? `${theme.spaces.m} 0`};
  padding: ${({ theme }) => `${theme.spaces.m} ${theme.spaces.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.m};
  border: 0;
  border-radius: ${({ theme }) => theme.spaces.xxl};
  outline: none;
  transition: background-color 0.2s ease-out;
  cursor: ${styles.cursor};
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  box-shadow: ${styles.boxShadow};

  &:hover {
    background-color: ${styles.hover.backgroundColor};
    color: ${({ theme }) => theme.colors.text.white};
  }

  &:active {
    background-color: ${styles.active.backgroundColor};
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    width: 100%;
    padding: ${({ theme }) => `${theme.spaces.l} ${theme.spaces.xl}`};
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
