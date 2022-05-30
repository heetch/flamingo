import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { theme } from '../../theme';

const GridCol = styled('div').attrs(({ s, m, l }) => ({
  className: cx('f-Grid-col', {
    [`f-Grid-col--s${s}`]: s,
    [`f-Grid-col--m${m}`]: m,
    [`f-Grid-col--l${l}`]: l,
  }),
}))`
  flex: 1;
  flex-shrink: 0;
  margin-left: calc(var(--gutter) / 2);
  margin-right: calc(var(--gutter) / 2);

  ${theme.breakPoint.s} {
    --gutter: ${theme.space.xl};
    flex-basis: ${({ s }) =>
      s && `calc((100% / var(--colsCount) * ${s}) - var(--gutter))`};
    max-width: ${({ s }) =>
      s && `calc((100% / var(--colsCount) * ${s}) - var(--gutter))`};
  }

  ${theme.breakPoint.m} {
    flex-basis: ${({ m }) =>
      m && `calc((100% / var(--colsCount) * ${m}) - var(--gutter))`};
    max-width: ${({ m }) =>
      m && `calc((100% / var(--colsCount) * ${m}) - var(--gutter))`};
  }

  @media (min-width: 800px) {
    flex-basis: ${({ l }) =>
      l && `calc((100% / var(--colsCount) * ${l}) - var(--gutter))`};
    max-width: ${({ l }) =>
      l && `calc((100% / var(--colsCount) * ${l}) - var(--gutter))`};
  }
`;
GridCol.propTypes = {
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
};

export default GridCol;
