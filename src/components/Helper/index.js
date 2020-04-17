import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const Helper = styled(UiText).attrs(() => ({
  as: 'small',
  variant: UiText.VARIANTS.subContent,
  className: 'f-Helper',
}))`
  display: block;
  color: var(--f-color-text--secondary);

  .is-invalid + & {
    color: var(--f-color-element--error);
  }

  .is-valid + & {
    color: var(--f-color-element--success);
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
