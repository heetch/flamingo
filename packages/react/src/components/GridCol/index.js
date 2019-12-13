import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const GridCol = ({ s, m, l, ...props }) => (
  <div
    className={cx('f-Grid-col', {
      [`f-Grid-col--s${s}`]: s,
      [`f-Grid-col--m${m}`]: m,
      [`f-Grid-col--l${l}`]: l,
    })}
    {...props}
  />
);

GridCol.propTypes = {
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
};

GridCol.defaultProps = {
  s: 0,
  m: 0,
  l: 0,
};

export default GridCol;
