import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import UiText from '../UiText';
import { theme } from '../../theme';

const Helper = styled(UiText).attrs(() => ({
  as: 'small',
  variant: UiText.VARIANTS.subContentBold,
  className: 'f-Helper',
}))`
  display: block;
  color: ${theme.color.text.tertiary};

  .is-invalid + & {
    color: ${theme.color.element.error};
  }

  .is-valid + & {
    color: ${theme.color.element.success};
  }
`;

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Helper;
