import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Link = ({ className, children, ...props }) => (
  <a className={cx('f-Link', className)} {...props}>
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Link;
