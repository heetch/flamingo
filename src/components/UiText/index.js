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
  fontSize({ variant, theme: { fontSize } }) {
    const variants = {
      [VARIANTS.h1]: fontSize.xxl,
      [VARIANTS.h2]: fontSize.xl,
      [VARIANTS.h3]: fontSize.l,
      [VARIANTS.h4]: fontSize.m,
      [VARIANTS.h5]: fontSize.s,
      [VARIANTS.h6]: fontSize.xs,
      [VARIANTS.content]: fontSize.m,
      [VARIANTS.contentBold]: fontSize.m,
      [VARIANTS.subContent]: fontSize.s,
      [VARIANTS.subContentBold]: fontSize.s,
    };

    return variants[variant] || undefined;
  },
  lineHeight({ variant, theme: { lineHeight } }) {
    const variants = {
      [VARIANTS.h1]: lineHeight.xl,
      [VARIANTS.h2]: lineHeight.l,
      [VARIANTS.h3]: lineHeight.m,
      [VARIANTS.h4]: lineHeight.s,
      [VARIANTS.h5]: lineHeight.s,
      [VARIANTS.h6]: lineHeight.s,
      [VARIANTS.content]: lineHeight.m,
      [VARIANTS.contentBold]: lineHeight.m,
      [VARIANTS.subContent]: lineHeight.m,
      [VARIANTS.subContentBold]: lineHeight.m,
    };

    return variants[variant] || undefined;
  },
  fontWeight({ variant, theme: { fontWeight } }) {
    const variants = {
      [VARIANTS.h1]: fontWeight.black,
      [VARIANTS.h2]: fontWeight.black,
      [VARIANTS.h3]: fontWeight.black,
      [VARIANTS.h4]: fontWeight.black,
      [VARIANTS.h5]: fontWeight.black,
      [VARIANTS.h6]: fontWeight.black,
      [VARIANTS.content]: fontWeight.normal,
      [VARIANTS.subContent]: fontWeight.normal,
      [VARIANTS.contentBold]: fontWeight.bold,
      [VARIANTS.subContentBold]: fontWeight.bold,
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
