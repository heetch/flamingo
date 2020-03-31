import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled, { keyframes } from 'styled-components';

import Icon from '../Icon';

const sizes = Object.values(Icon.SIZES);

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(({ className, ...props }) => (
  <Icon
    className={cx('f-Spinner', className)}
    icon={Icon.ICONS.IconLoader}
    {...props}
  />
))`
  animation: ${rotate} 600ms linear infinite;
`;

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(sizes),
};

export default Spinner;
