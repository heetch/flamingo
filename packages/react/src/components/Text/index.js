import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const types = Object.values(UiText.TYPES);

const Text = ({ as: Component, className, type, isNumber, ...props }) => (
  <UiText
    type={type}
    as={Component}
    className={cx('Text', `Text--${Component}`, className, {
      'is-number': isNumber,
    })}
    {...props}
  />
);

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  isNumber: PropTypes.bool,
  type: PropTypes.oneOf(types),
};

Text.defaultProps = {
  as: 'p',
  className: undefined,
  isNumber: false,
  type: UiText.TYPES.content,
};

export default Text;
