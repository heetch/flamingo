import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import UiText from '../UiText';

const Helper = styled(UiText).attrs(({ className }) => ({
  as: 'small',
  variant: UiText.VARIANTS.subContent,
  className: cx('f-Helper', className),
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

Helper.displayName = 'Helper';

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
