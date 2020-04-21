import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const Helper = styled(UiText).attrs(() => ({
  as: 'small',
  variant: UiText.VARIANTS.subContent,
  className: 'f-Helper',
}))`
  display: block;
  color: ${({ theme }) => theme.colors.text.secondary};

  .is-invalid + & {
    color: ${({ theme }) => theme.colors.element.error};
  }

  .is-valid + & {
    color: ${({ theme }) => theme.colors.element.success};
  }
`;

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
