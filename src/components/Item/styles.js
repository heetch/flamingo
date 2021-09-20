import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { theme } from '../../theme';

const styles = {
  color({ size }) {
    if (size === 'mini') return theme.color.text.secondary;

    return theme.color.text.primary;
  },
  yPadding({ size }) {
    if (size === 'sub') return theme.space.m;
    if (size === 'mini') return theme.space.s;

    return theme.space.l;
  },
  valueContainerColor({ valid, invalid }) {
    if (invalid) return theme.color.element.error;
    if (valid) return theme.color.element.success;

    return undefined;
  },
};

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${Icon} {
    margin-right: ${theme.space.m};
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${theme.space.m};
  color: ${styles.valueContainerColor};

  ${Icon} {
    display: block;
    margin-left: ${theme.space.m};
  }
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${styles.yPadding} ${theme.space.l};
  background-color: ${theme.color.element.primary};
  border-radius: ${theme.borderRadius.m};
  color: ${styles.color};
  transition: background-color 0.1s ease-out;
  cursor: ${({ hasAction }) => hasAction && 'pointer'};

  &:hover {
    background-color: ${({ hasAction }) =>
      hasAction && theme.color.element.inactive};
  }

  ${theme.breakPoint.s} {
    padding: ${({ size }) =>
      size === 'normal' && `${theme.space.xl} ${theme.space.l}`}};
  }
`;

StyledItem.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  size: PropTypes.string,
  hasAction: PropTypes.bool,
};
