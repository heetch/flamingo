import PropTypes from 'prop-types';
import styled from 'styled-components';

import GridCol from './GridCol';
import { theme } from '../../theme';

const Grid = styled('div').attrs(() => ({
  className: 'f-Grid',
}))`
  --colsCount: ${({ colsCount }) => colsCount || 12};
  --gutter: ${theme.space.xxl};

  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--gutter) / 2 * -1);
  margin-right: calc(var(--gutter) / 2 * -1);
`;

Grid.propTypes = {
  className: PropTypes.string,
  colsCount: PropTypes.number,
};

Grid.Col = GridCol;

export default Grid;
