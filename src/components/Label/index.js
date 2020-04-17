import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import UiText from '../UiText';

const Label = styled('label').attrs(({ className }) => ({
  className: cx('f-Label', className),
  variant: UiText.VARIANTS.subContentBold,
  as: 'label',
}))`
  display: inline-block;
  margin-top: var(--f-space--m);
  margin-bottom: var(--f-space--m);
  color: var(--f-color-text--primary);

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
