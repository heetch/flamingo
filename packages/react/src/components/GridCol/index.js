import React from 'react';
import PropTypes from 'prop-types';

const GridCol = ({ children }) => <div className='f-Grid-col'>{children}</div>;

GridCol.propTypes = {
  children: PropTypes.node,
};

GridCol.defaultProps = {
  children: undefined,
};

export default GridCol;
