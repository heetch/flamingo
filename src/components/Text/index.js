import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const variants = Object.values(UiText.VARIANTS);

const Text = styled(UiText).attrs(() => ({
  className: 'f-Text',
}))`
  color: ${({ theme }) => theme.colors.text.secondary};
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
  isNumber: false,
  variant: UiText.VARIANTS.content,
};

export default Text;
