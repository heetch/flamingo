import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const Helper = React.forwardRef(({ className, children, ...props }, ref) => (
  <UiText
    as='small'
    variant={UiText.VARIANTS.subContent}
    className={cx('f-Helper', className)}
    ref={ref}
    {...props}
  >
    {children}
  </UiText>
));

Helper.displayName = 'Helper';

Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Helper.defaultProps = {
  className: undefined,
};

export default Helper;
