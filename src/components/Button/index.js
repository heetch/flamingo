import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const styles = {
  color({ disabled, variant, intent }) {
    if (disabled) {
      return 'var(--f-color-text--tertiary) !important';
    }
    if (variants.includes(variant) && intent === INTENTS.PRIMARY) {
      return 'var(--f-color-brandPrimary)';
    }
    if (variants.includes(variant) && intent === INTENTS.SECONDARY) {
      return 'var(--f-color-brandSecondary)';
    }

    return 'var(--f-color-text--white)';
  },
  backgroundColor({ intent, disabled, variant }) {
    if (disabled) {
      return 'var(--f-color-element--primary) !important';
    }
    if (variants.includes(variant)) {
      return 'var(--f-color-text--white)';
    }
    if (intent === INTENTS.PRIMARY) {
      return 'var(--f-color-brandPrimary)';
    }
    if (intent === INTENTS.SECONDARY) {
      return 'var(--f-color-brandSecondary)';
    }

    return undefined;
  },
  boxShadow({ intent, variant, disabled }) {
    if (disabled) {
      return undefined;
    }
    if (variant === VARIANTS.OUTLINE && intent === INTENTS.PRIMARY) {
      return '0 0 0 1px var(--f-color-brandPrimary)';
    }
    if (variant === VARIANTS.OUTLINE && intent === INTENTS.SECONDARY) {
      return '0 0 0 1px var(--f-color-brandSecondary)';
    }

    return undefined;
  },
  cursor({ disabled, isLoading }) {
    if (disabled) {
      return 'not-allowed !important';
    }
    if (isLoading) {
      // Don't add cursor value, use default.
      return undefined;
    }

    return 'pointer';
  },
  hover: {
    backgroundColor({ intent }) {
      if (intent === INTENTS.PRIMARY) {
        return 'var(--f-color-brandPrimary--light)';
      }
      if (intent === INTENTS.SECONDARY) {
        return 'var(--f-color-brandSecondary--light)';
      }

      return undefined;
    },
  },
  active: {
    backgroundColor({ intent }) {
      if (intent === INTENTS.PRIMARY) {
        return 'var(--f-color-brandPrimary)';
      }
      if (intent === INTENTS.SECONDARY) {
        return 'var(--f-color-brandSecondary)';
      }

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

const StyledButton = styled('button').attrs(() => ({
  className: 'f-Button',
}))`
  position: relative;
  display: inline-block;
  margin: ${({ margin }) => margin ?? 'var(--f-space--m) 0'};
  padding: var(--f-space--m) var(--f-space--xl);
  font-size: var(--f-fontSize--s);
  font-weight: var(--f-fontWeight--bold);
  line-height: var(--f-lineHeight--m);
  border: 0;
  border-radius: var(--f-space--xxl);
  outline: none;
  transition: background-color 0.2s ease-out;
  cursor: ${styles.cursor};
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  box-shadow: ${styles.boxShadow};

  &:hover {
    background-color: ${styles.hover.backgroundColor};
    color: var(--f-color-text--white);
  }

  &:active {
    background-color: ${styles.active.backgroundColor};
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    width: 100%;
    padding: var(--f-space--l) var(--f-space--xl);
    text-align: center;
  }
`;

const Button = React.forwardRef((props, ref) => (
  <StyledButton {...props} ref={ref}>
    {props.isLoading && (
      <SpinnerContainer>
        <Spinner size={'l'} />
      </SpinnerContainer>
    )}

    <Content isLoading={props.isLoading}>{props.children}</Content>
  </StyledButton>
));

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
