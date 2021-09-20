import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import UiText from '../UiText';
import { theme } from '../../theme';

const variants = Object.values(UiText.VARIANTS);

const Text = styled(UiText).attrs(({ textColor }) => ({
  className: 'f-Text',
  textColor: textColor || theme.color.text.secondary,
}))`
  text-align: ${({ isNumber }) => isNumber && 'right'};
`;

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  isNumber: PropTypes.bool,
  variant: PropTypes.oneOf(variants),
};

Text.defaultProps = {
  as: 'p',
  variant: UiText.VARIANTS.content,
};

export default Text;
