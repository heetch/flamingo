import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';
import { theme } from '../../theme';

const Label = styled(UiText).attrs(() => ({
  className: 'f-Label',
  variant: UiText.VARIANTS.subContentBold,
  as: 'label',
}))`
  display: inline-block;
  margin-top: ${theme.space.m};
  margin-bottom: ${theme.space.m};
  color: ${theme.color.text.primary};

  & + .f-FormEl-wrapper {
    margin-top: 0;
  }
`;

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
