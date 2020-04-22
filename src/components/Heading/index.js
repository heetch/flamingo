import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const styles = {
  marginTop({ level, theme }) {
    if (level === 1) return theme.space.xl;
    if (level === 2) return theme.space.l;
    return theme.space.m;
  },
};

const Heading = styled(UiText).attrs(({ as, level }) => ({
  as: as || `h${level}`,
  variant: `h${level}`,
  className: 'f-Heading',
}))`
  color: ${({ theme }) => theme.color.text.primary};
  margin-top: ${styles.marginTop};
  margin-bottom: ${({ theme }) => theme.space.m};
`;

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS),
};

Heading.defaultProps = {
  level: 1,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
