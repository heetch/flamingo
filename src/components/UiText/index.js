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
    const variants = {
      [VARIANTS.h1]: 'var(--f-fontSize--xxl)',
      [VARIANTS.h2]: 'var(--f-fontSize--xl)',
      [VARIANTS.h3]: 'var(--f-fontSize--l)',
      [VARIANTS.h4]: 'var(--f-fontSize--m)',
      [VARIANTS.h5]: 'var(--f-fontSize--s)',
      [VARIANTS.h6]: 'var(--f-fontSize--xs)',
      [VARIANTS.content]: 'var(--f-fontSize--m)',
      [VARIANTS.contentBold]: 'var(--f-fontSize--m)',
      [VARIANTS.subContent]: 'var(--f-fontSize--s)',
      [VARIANTS.subContentBold]: 'var(--f-fontSize--s)',
    };

    return variants[variant] || undefined;
  },
  lineHeight({ variant }) {
    const variants = {
      [VARIANTS.h1]: 'var(--f-lineHeight--xl)',
      [VARIANTS.h2]: 'var(--f-lineHeight--l)',
      [VARIANTS.h3]: 'var(--f-lineHeight--m)',
      [VARIANTS.h4]: 'var(--f-lineHeight--s)',
      [VARIANTS.h5]: 'var(--f-lineHeight--s)',
      [VARIANTS.h6]: 'var(--f-lineHeight--s)',
      [VARIANTS.content]: 'var(--f-lineHeight--m)',
      [VARIANTS.contentBold]: 'var(--f-lineHeight--m)',
      [VARIANTS.subContent]: 'var(--f-lineHeight--m)',
      [VARIANTS.subContentBold]: 'var(--f-lineHeight--m)',
    };

    return variants[variant] || undefined;
  },
  fontWeight({ variant }) {
    const variants = {
      [VARIANTS.h1]: 'var(--f-fontWeight--black)',
      [VARIANTS.h2]: 'var(--f-fontWeight--black)',
      [VARIANTS.h3]: 'var(--f-fontWeight--black)',
      [VARIANTS.h4]: 'var(--f-fontWeight--black)',
      [VARIANTS.h5]: 'var(--f-fontWeight--black)',
      [VARIANTS.h6]: 'var(--f-fontWeight--black)',
      [VARIANTS.content]: 'var(--f-fontWeight--normal)',
      [VARIANTS.subContent]: 'var(--f-fontWeight--normal)',
      [VARIANTS.contentBold]: 'var(--f-fontWeight--bold)',
      [VARIANTS.subContentBold]: 'var(--f-fontWeight--bold)',
    };

    return variants[variant] || undefined;
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
