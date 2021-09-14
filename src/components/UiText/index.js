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
      [VARIANTS.h1]: theme.lineHeight.xxl,
      [VARIANTS.h2]: theme.lineHeight.xl,
      [VARIANTS.h3]: theme.lineHeight.s,
      [VARIANTS.h4]: theme.lineHeight.m,
      [VARIANTS.h5]: theme.lineHeight.m,
      [VARIANTS.h6]: theme.lineHeight.m,
      [VARIANTS.content]: theme.lineHeight.xl,
      [VARIANTS.contentBold]: theme.lineHeight.xl,
      [VARIANTS.subContent]: theme.lineHeight.l,
      [VARIANTS.subContentBold]: theme.lineHeight.l,
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
  textTransform({ variant }) {
    const variants = {
      [VARIANTS.h1]: 'uppercase',
      [VARIANTS.h2]: 'uppercase',
    };

    return variants[variant] || undefined;
  },
  fontFamily({ variant }) {
    const variants = {
      [VARIANTS.h1]: 'MarkOT-Ultra',
      [VARIANTS.h2]: 'MarkOT-Ultra',
      [VARIANTS.h3]: 'MarkOT-Ultra',
      [VARIANTS.h4]: 'Avenir',
      [VARIANTS.h5]: 'Avenir',
      [VARIANTS.h6]: 'Avenir',
      [VARIANTS.content]: 'Avenir',
      [VARIANTS.subContent]: 'Avenir',
      [VARIANTS.contentBold]: 'Avenir',
      [VARIANTS.subContentBold]: 'Avenir',
    };

    return variants[variant] || undefined;
  },
};

const UiText = styled('p').attrs(() => ({
  className: `f-UiText`,
}))`
  font-weight: ${({ fontWeight }) => fontWeight || styles.fontWeight};
  font-size: ${({ fontSize }) => fontSize || styles.fontSize};
  line-height: ${({ lineHeight }) => lineHeight || styles.lineHeight};
  margin: ${({ margin }) => margin};
  color: ${({ textColor }) => textColor};
  text-transform: ${({ textTransform }) =>
    textTransform || styles.textTransform};
  font-family: ${({ fontFamily }) => fontFamily || styles.fontFamily};
`;

UiText.propTypes = {
  className: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.string,
};

UiText.defaultProps = {
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
