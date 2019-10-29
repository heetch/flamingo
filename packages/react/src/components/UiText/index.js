import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VARIANTS = {
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

const variants = Object.keys(VARIANTS);

const UiText = React.forwardRef(
  ({ as: Component, className, variant, ...props }, ref) => (
    <Component
      className={cx('UiText', `UiText--${VARIANTS[variant]}`, className)}
      ref={ref}
      {...props}
    />
  ),
);

UiText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(variants),
};

UiText.defaultProps = {
  as: 'p',
  className: undefined,
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
