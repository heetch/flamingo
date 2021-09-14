import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Text from '../Text';
import { theme } from '../../theme';

const styles = {
  padding({ size }) {
    if (size === 's') return theme.space.l;
    if (size === 'm') return theme.space.xl;

    return undefined;
  },
  boxShadow({ elevation }) {
    if (elevation === 1) return '0 2px 10px rgba(25, 1, 52, 0.08)';
    if (elevation === 2) return '0 4px 20px rgba(25, 1, 52, 0.14)';
    return undefined;
  },
  border({ isSelected }) {
    if (isSelected) return `1px solid ${theme.color.brand.secondary}`;
    return `1px solid ${theme.color.element.inactive}`;
  },
};

const Card = styled('div').attrs(() => ({
  className: 'f-Card',
}))`
  background-color: ${theme.color.element.primary};
  box-shadow: ${styles.boxShadow};
  border-radius: ${theme.borderRadius.s};
  padding: ${styles.padding};
  border: ${styles.border};

  & & {
    border-radius: ${theme.borderRadius.s};
  }

  & & & {
    border-radius: ${theme.borderRadius.s};
  }

  & & & & {
    border-radius: ${theme.borderRadius.s};
  }

  ${Text} {
    margin: 0;
  }
`;

const ELEVATIONS = [0, 1, 2];
const SIZES = { S: 's', M: 'm' };

const sizes = Object.values(SIZES);

Card.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.oneOf(ELEVATIONS),
  isSelected: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

Card.defaultProps = {
  size: SIZES.M,
};

Card.ELEVATIONS = ELEVATIONS;
Card.SIZES = SIZES;

export default Card;
