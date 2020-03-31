import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text';
import { theme } from '../../theme';

const styles = {
  padding({ size }) {
    if (size === 's') return theme.space.xl;
    if (size === 'm') return theme.space.xxl;

    return undefined;
  },
  boxShadow({ isSelected, elevation }) {
    if (elevation === 2) return '0 4px 20px rgba(25, 1, 52, 0.14)';
    if (elevation === 1) return '0 2px 10px rgba(25, 1, 52, 0.08)';
    if (isSelected) return `inset 0 0 0 3px ${theme.color.brand.primary}`;

    return `0 0 0 1px ${theme.color.element.inactive}`;
  },
};

const Card = styled('div').attrs(() => ({
  className: 'f-Card',
}))`
  background-color: ${theme.color.element.primary};
  box-shadow: ${styles.boxShadow};
  border-radius: ${theme.borderRadius.xl};
  padding: ${styles.padding};

  & & {
    border-radius: ${theme.borderRadius.l};
  }

  & & & {
    border-radius: ${theme.borderRadius.m};
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
