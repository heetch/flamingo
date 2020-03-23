import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const Label = React.forwardRef(({ className, htmlFor, ...props }, ref) => (
  <UiText
    variant={UiText.VARIANTS.subContentBold}
    as='label'
    className={cx('f-Label', className)}
    htmlFor={htmlFor}
    ref={ref}
    {...props}
  />
));

Label.displayName = 'Label';

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: undefined,
};

export default Label;
