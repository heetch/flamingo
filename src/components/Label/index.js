import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const Label = styled('label').attrs(() => ({
  className: 'f-Label',
  variant: UiText.VARIANTS.subContentBold,
  as: 'label',
}))`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space.m};
  margin-bottom: ${({ theme }) => theme.space.m};
  color: ${({ theme }) => theme.color.text.primary};

  & + .f-FormEl-wrapper {
    margin-top: 0;
  }
`;

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: undefined,
};

export default Label;
