import styled from 'styled-components/macro';
import { theme } from '../../theme';

export const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const VARIANTS = {
  OUTLINE: 'outline',
  MINIMAL: 'minimal',
  TEXT: 'text',
};

export const intents = Object.values(INTENTS);
export const variants = Object.values(VARIANTS);

const styles = {
  color({ disabled, variant, intent }) {
    if (disabled) {
      return theme.color.text.tertiary;
    }
    if (variants.includes(variant) && intent === INTENTS.PRIMARY) {
      return theme.color.brand.primary;
    }
    if (variants.includes(variant) && intent === INTENTS.SECONDARY) {
      return theme.color.brand.secondary;
    }

    return theme.color.text.white;
  },
  backgroundColor({ intent, disabled, variant }) {
    if (variant === 'text') return `transparent`;
    if (disabled) return theme.color.element.inactive;
    if (intent === INTENTS.ERROR) return theme.color.element.error;
    if (intent === INTENTS.SUCCESS) return theme.color.element.success;
    if (variants.includes(variant)) return theme.color.text.white;
    if (intent === INTENTS.PRIMARY) return theme.color.brand.primary;
    if (intent === INTENTS.SECONDARY) return theme.color.brand.secondary;

    return undefined;
  },
  boxShadow({ intent, variant, disabled }) {
    if (variant === VARIANTS.TEXT) {
      return undefined;
    }

    if (disabled) {
      if (variant === VARIANTS.OUTLINE) {
        return `inset 0 0 0 2px ${theme.color.text.tertiary}`;
      }
      return undefined;
    }
    if (variant === VARIANTS.OUTLINE && intent === INTENTS.PRIMARY) {
      return `inset 0 0 0 2px ${theme.color.brand.primary}`;
    }
    if (variant === VARIANTS.OUTLINE && intent === INTENTS.SECONDARY) {
      return `inset 0 0 0 2px ${theme.color.brand.secondary}`;
    }

    return undefined;
  },
  cursor({ isLoading, disabled }) {
    if (isLoading || disabled) {
      // Don't add cursor value, use default.
      return undefined;
    }

    return 'pointer';
  },
  opacity({ disabled }) {
    if (disabled) {
      // Don't add cursor value, use default.
      return '30%';
    }

    return '100%';
  },
  marginLeft({ margin, disableAutoMarginLeft }) {
    if (disableAutoMarginLeft) {
      return 0;
    }
    if (!margin) {
      return theme.space.m;
    }
    return undefined;
  },
  hover: {
    backgroundColor({ intent, disabled }) {
      if (disabled) {
        return theme.color.element.inactive;
      }
      if (intent === INTENTS.PRIMARY) {
        return theme.color.brand.primaryLight;
      }
      if (intent === INTENTS.SECONDARY) {
        return theme.color.brand.secondaryLight;
      }

      return undefined;
    },
  },
  active: {
    backgroundColor({ intent, disabled }) {
      if (disabled) {
        return theme.color.element.inactive;
      }
      if (intent === INTENTS.PRIMARY) {
        return theme.color.brand.primary;
      }
      if (intent === INTENTS.SECONDARY) {
        return theme.color.brand.secondary;
      }
      return undefined;
    },
  },
};

export const Content = styled.span`
  opacity: ${({ withIcon }) => withIcon && 0};
  font-family: Avenir, Arial, sans-serif;
  pointer-events: ${({ withIcon }) => withIcon && 'none'};
  font-weight: ${theme.fontWeight.black};
  font-size: ${theme.fontSize.m};
`;

export const IconContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled('button').attrs(() => ({
  className: 'f-Button',
}))`
  position: relative;
  display: inline-block;
  margin: ${({ margin }) => margin ?? `${theme.space.m} 0`};
  padding: 0;
  :not(.f-Button--icon) {
    padding: ${theme.space.m} ${theme.space.xl};
  }
  max-height: 60px;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.m};
  border: 0;
  border-radius: ${theme.borderRadius.s};
  outline: none;
  transition: background-color 0.2s ease-out;
  cursor: ${styles.cursor};
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  box-shadow: ${styles.boxShadow};
  opacity: ${styles.opacity};

  & + & {
    margin-left: ${styles.marginLeft};
  }

  &:hover {
    background-color: ${styles.hover.backgroundColor};
    color: ${({ variant, disabled }) =>
      variant === 'text' || disabled ? undefined : theme.color.text.white};
    text-decoration: none;
  }

  &:active {
    background-color: ${styles.active.backgroundColor};
  }

  ${theme.breakPoint.s} {
    & + & {
      margin-left: ${({ margin }) => (!margin ? 0 : undefined)};
    }

    width: 100%;
    :not(.f-Button--icon) {
      padding: ${theme.space.l} ${theme.space.xl};
    }
    text-align: center;
  }
`;
