import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Overlay = ({ className, ...props }) => (
  <div className={cx('f-Overlay', className)} {...props} />
);

Overlay.propTypes = {
  className: PropTypes.string,
};

Overlay.defaultProps = {
  className: undefined,
};

export default Overlay;
