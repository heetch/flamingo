import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import UiText from '../UiText';

const Label = styled(({ className, htmlFor, ...rest }) => (
  <UiText
    variant={UiText.VARIANTS.subContentBold}
    as='label'
    className={cx('f-Label', className)}
    htmlFor={htmlFor}
    {...rest}
  />
))`
  display: inline-block;
  margin-top: var(--f-space--m);
  margin-bottom: var(--f-space--m);
  color: var(--f-color-text--primary);

  & + .f-FormEl-wrapper {
    margin-top: 0;
  }
`;

Label.displayName = 'Label';

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: undefined,
};

export default Label;
