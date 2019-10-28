import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
};

const types = Object.keys(TYPES);

const UiText = React.forwardRef(
  ({ as: Component, className, type, ...props }, ref) => (
    <Component
      className={cx('UiText', `UiText--${TYPES[type]}`, className)}
      ref={ref}
      {...props}
    />
  ),
);

UiText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
};

UiText.defaultProps = {
  as: 'p',
  className: undefined,
  type: TYPES.content,
};

UiText.TYPES = TYPES;

export default UiText;
