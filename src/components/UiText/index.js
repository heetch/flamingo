import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

const VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
};

const variants = Object.keys(VARIANTS);

const styles = {
  fontSize({ variant }) {
    if (variant === VARIANTS.h1) {
      return 'var(--f-fontSize--xxl)';
    }
    if (variant === VARIANTS.h2) {
      return 'var(--f-fontSize--xl)';
    }
    if (variant === VARIANTS.h3) {
      return 'var(--f-fontSize--l)';
    }
    if (variant === VARIANTS.h4) {
      return 'var(--f-fontSize--m)';
    }
    if (variant === VARIANTS.h5) {
      return 'var(--f-fontSize--s)';
    }
    if (variant === VARIANTS.h6) {
      return 'var(--f-fontSize--xs)';
    }
    if (variant === VARIANTS.content || variant === VARIANTS.contentBold) {
      return 'var(--f-fontSize--m)';
    }
    if (
      variant === VARIANTS.subContent ||
      variant === VARIANTS.subContentBold
    ) {
      return 'var(--f-fontSize--s)';
    }

    return undefined;
  },
  lineHeight({ variant }) {
    if (variant === VARIANTS.h1) {
      return 'var(--f-lineHeight--xl)';
    }
    if (variant === VARIANTS.h2) {
      return 'var(--f-lineHeight--l)';
    }
    if (variant === VARIANTS.h3) {
      return 'var(--f-lineHeight--m)';
    }
    if (
      variant === VARIANTS.h4 ||
      variant === VARIANTS.h5 ||
      variant === VARIANTS.h6
    ) {
      return 'var(--f-lineHeight--s)';
    }
    if (
      variant === VARIANTS.content ||
      variant === VARIANTS.contentBold ||
      variant === VARIANTS.subContent ||
      variant === VARIANTS.subContentBold
    ) {
      return 'var(--f-lineHeight--m)';
    }
    return undefined;
  },
  fontWeight({ variant }) {
    if (
      variant === VARIANTS.h1 ||
      variant === VARIANTS.h2 ||
      variant === VARIANTS.h3 ||
      variant === VARIANTS.h4 ||
      variant === VARIANTS.h5 ||
      variant === VARIANTS.h6
    ) {
      return 'var(--f-fontWeight--black)';
    }
    if (
      variant === VARIANTS.contentBold ||
      variant === VARIANTS.subContentBold
    ) {
      return 'var(--f-fontWeight--bold)';
    }
    if (variant === VARIANTS.content || variant === VARIANTS.subContent) {
      return 'var(--f-fontWeight--normal)';
    }

    return undefined;
  },
};
const UiText = styled(({ className, variant, ...rest }) => (
  <p
    className={cx('f-UiText', `f-UiText--${VARIANTS[variant]}`, className)}
    {...rest}
  />
))`
  font-weight: ${styles.fontWeight};
  font-size: ${styles.fontSize};
  line-height: ${styles.lineHeight};
`;

UiText.displayName = 'UiText';

UiText.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(variants),
};

UiText.defaultProps = {
  className: undefined,
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
