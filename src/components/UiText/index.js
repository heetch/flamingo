import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';

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
  fontSize({ variant }) {
    const variants = {
      [VARIANTS.h1]: theme.fontSize.xxl,
      [VARIANTS.h2]: theme.fontSize.xl,
      [VARIANTS.h3]: theme.fontSize.l,
      [VARIANTS.h4]: theme.fontSize.m,
      [VARIANTS.h5]: theme.fontSize.s,
      [VARIANTS.h6]: theme.fontSize.xs,
      [VARIANTS.content]: theme.fontSize.m,
      [VARIANTS.contentBold]: theme.fontSize.m,
      [VARIANTS.subContent]: theme.fontSize.s,
      [VARIANTS.subContentBold]: theme.fontSize.s,
    };

    return variants[variant] || undefined;
  },
  lineHeight({ variant }) {
    const variants = {
      [VARIANTS.h1]: theme.lineHeight.xl,
      [VARIANTS.h2]: theme.lineHeight.l,
      [VARIANTS.h3]: theme.lineHeight.m,
      [VARIANTS.h4]: theme.lineHeight.s,
      [VARIANTS.h5]: theme.lineHeight.s,
      [VARIANTS.h6]: theme.lineHeight.s,
      [VARIANTS.content]: theme.lineHeight.m,
      [VARIANTS.contentBold]: theme.lineHeight.m,
      [VARIANTS.subContent]: theme.lineHeight.m,
      [VARIANTS.subContentBold]: theme.lineHeight.m,
    };

    return variants[variant] || undefined;
  },
  fontWeight({ variant }) {
    const variants = {
      [VARIANTS.h1]: theme.fontWeight.black,
      [VARIANTS.h2]: theme.fontWeight.black,
      [VARIANTS.h3]: theme.fontWeight.black,
      [VARIANTS.h4]: theme.fontWeight.black,
      [VARIANTS.h5]: theme.fontWeight.black,
      [VARIANTS.h6]: theme.fontWeight.black,
      [VARIANTS.content]: theme.fontWeight.normal,
      [VARIANTS.subContent]: theme.fontWeight.normal,
      [VARIANTS.contentBold]: theme.fontWeight.bold,
      [VARIANTS.subContentBold]: theme.fontWeight.bold,
    };

    return variants[variant] || undefined;
  },
};

const UiText = styled('p').attrs(() => ({
  className: `f-UiText`,
}))`
  font-weight: ${styles.fontWeight};
  font-size: ${styles.fontSize};
  line-height: ${styles.lineHeight};
  margin: ${({ margin }) => margin};
  color: ${({ textColor }) => textColor};
`;

UiText.propTypes = {
  className: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
};

UiText.defaultProps = {
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
