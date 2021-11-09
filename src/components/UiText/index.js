import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
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
  contentBlack: 'contentBlack',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
  subContentBlack: 'subContentBlack',
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
      [VARIANTS.contentBlack]: theme.fontSize.m,
      [VARIANTS.subContent]: theme.fontSize.s,
      [VARIANTS.subContentBold]: theme.fontSize.s,
      [VARIANTS.subContentBlack]: theme.fontSize.s,
    };

    return variants[variant] || undefined;
  },
  fontWeight({ variant }) {
    const variants = {
      [VARIANTS.h1]: theme.fontWeight.normal,
      [VARIANTS.h2]: theme.fontWeight.normal,
      [VARIANTS.h3]: theme.fontWeight.normal,
      [VARIANTS.h4]: theme.fontWeight.normal,
      [VARIANTS.h5]: theme.fontWeight.normal,
      [VARIANTS.h6]: theme.fontWeight.normal,
      [VARIANTS.content]: theme.fontWeight.normal,
      [VARIANTS.contentBlack]: theme.fontWeight.black,
      [VARIANTS.contentBold]: theme.fontWeight.bold,
      [VARIANTS.subContent]: theme.fontWeight.normal,
      [VARIANTS.subContentBold]: theme.fontWeight.bold,
      [VARIANTS.subContentBlack]: theme.fontWeight.black,
    };

    return variants[variant] || undefined;
  },
  textTransform({ variant }) {
    const variants = {
      [VARIANTS.h1]: 'uppercase',
      [VARIANTS.h2]: 'uppercase',
      [VARIANTS.h3]: 'uppercase',
    };

    return variants[variant] || undefined;
  },
  letterSpacing({ variant }) {
    const variants = {
      [VARIANTS.h1]: '1.5px',
      [VARIANTS.h2]: '1px',
      [VARIANTS.h3]: '0.5px',
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
      [VARIANTS.contentBold]: 'Avenir',
      [VARIANTS.contentBlack]: 'Avenir',
      [VARIANTS.subContent]: 'Avenir',
      [VARIANTS.subContentBold]: 'Avenir',
      [VARIANTS.subContentBlack]: 'Avenir',
    };

    return variants[variant] || undefined;
  },
};

const UiText = styled('p').attrs(() => ({
  className: `f-UiText`,
}))`
  font-weight: ${({ fontWeight }) => fontWeight || styles.fontWeight};
  font-size: ${({ fontSize }) => fontSize || styles.fontSize};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  margin: ${({ margin }) => margin};
  color: ${({ textColor }) => textColor};
  text-transform: ${({ textTransform }) =>
    textTransform || styles.textTransform};
  font-family: ${({ fontFamily }) => fontFamily || styles.fontFamily};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing || styles.letterSpacing};
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
