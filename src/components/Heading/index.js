import PropTypes from 'prop-types';
import styled from 'styled-components';

import UiText from '../UiText';
import { theme } from '../../theme';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const styles = {
  marginTop({ level }) {
    if (level === 1) {
      return theme.space.xl;
    }
    if (level === 2) {
      return theme.space.l;
    }

    return theme.space.m;
  },
};

const Heading = styled(UiText).attrs(({ as, level }) => ({
  as: as || `h${level}`,
  variant: `h${level}`,
  className: 'f-Heading',
}))`
  color: ${({ textColor }) => textColor || theme.color.text.primary};
  margin-top: ${({ marginTop }) => marginTop || styles.marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom || theme.space.m};
`;

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  textColor: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS),
};

Heading.defaultProps = {
  level: 1,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
