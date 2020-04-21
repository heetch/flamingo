import PropTypes from 'prop-types';
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

const styles = {
  fontSize({ variant, theme: { fontSizes } }) {
    const variants = {
      [VARIANTS.h1]: fontSizes.xxl,
      [VARIANTS.h2]: fontSizes.xl,
      [VARIANTS.h3]: fontSizes.l,
      [VARIANTS.h4]: fontSizes.m,
      [VARIANTS.h5]: fontSizes.s,
      [VARIANTS.h6]: fontSizes.xs,
      [VARIANTS.content]: fontSizes.m,
      [VARIANTS.contentBold]: fontSizes.m,
      [VARIANTS.subContent]: fontSizes.s,
      [VARIANTS.subContentBold]: fontSizes.s,
    };

    return variants[variant] || undefined;
  },
  lineHeight({ variant, theme: { lineHeights } }) {
    const variants = {
      [VARIANTS.h1]: lineHeights.xl,
      [VARIANTS.h2]: lineHeights.l,
      [VARIANTS.h3]: lineHeights.m,
      [VARIANTS.h4]: lineHeights.s,
      [VARIANTS.h5]: lineHeights.s,
      [VARIANTS.h6]: lineHeights.s,
      [VARIANTS.content]: lineHeights.m,
      [VARIANTS.contentBold]: lineHeights.m,
      [VARIANTS.subContent]: lineHeights.m,
      [VARIANTS.subContentBold]: lineHeights.m,
    };

    return variants[variant] || undefined;
  },
  fontWeight({ variant, theme: { fontWeights } }) {
    const variants = {
      [VARIANTS.h1]: fontWeights.black,
      [VARIANTS.h2]: fontWeights.black,
      [VARIANTS.h3]: fontWeights.black,
      [VARIANTS.h4]: fontWeights.black,
      [VARIANTS.h5]: fontWeights.black,
      [VARIANTS.h6]: fontWeights.black,
      [VARIANTS.content]: fontWeights.normal,
      [VARIANTS.subContent]: fontWeights.normal,
      [VARIANTS.contentBold]: fontWeights.bold,
      [VARIANTS.subContentBold]: fontWeights.bold,
    };

    return variants[variant] || undefined;
  },
};
const UiText = styled('p').attrs(({ variant }) => ({
  className: `f-UiText f-UiText--${VARIANTS[variant]}`,
}))`
  font-weight: ${styles.fontWeight};
  font-size: ${styles.fontSize};
  line-height: ${styles.lineHeight};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
`;

UiText.propTypes = {
  className: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
};

UiText.defaultProps = {
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
