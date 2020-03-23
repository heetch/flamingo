import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';

const Spinner = React.forwardRef(({ className, ...props }, ref) => (
  <Icon
    className={cx('f-Spinner', className)}
    icon={Icon.ICONS.IconLoader}
    ref={ref}
    {...props}
  />
));

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: undefined,
};

export default Spinner;
