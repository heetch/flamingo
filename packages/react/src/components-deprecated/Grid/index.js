import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import GridCol from '../GridCol';

const Grid = ({ className, ...props }) => (
  <div className={cx('f-Grid', className)} {...props} />
);

Grid.propTypes = {
  className: PropTypes.string,
};

Grid.defaultProps = {
  className: undefined,
};

Grid.Col = GridCol;

export default Grid;
