import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const variants = Object.values(UiText.VARIANTS);

const Text = ({ as: Component, className, variant, isNumber, ...props }) => (
  <UiText
    variant={variant}
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
  variant: PropTypes.oneOf(variants),
};

Text.defaultProps = {
  as: 'p',
  className: undefined,
  isNumber: false,
  variant: UiText.VARIANTS.content,
};

export default Text;
