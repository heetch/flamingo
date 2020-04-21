import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const Label = styled('label').attrs(() => ({
  className: 'f-Label',
  variant: UiText.VARIANTS.subContentBold,
  as: 'label',
}))`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spaces.m};
  margin-bottom: ${({ theme }) => theme.spaces.m};
  color: ${({ theme }) => theme.colors.text.primary};

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
