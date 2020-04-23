import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const styles = {
  color({ size }) {
    if (size === 'mini') return 'var(--f-color-text--secondary)';

    return 'var(--f-color-text--primary)';
  },
  yPadding({ size }) {
    if (size === 'sub') return 'var(--f-space--m)';
    if (size === 'mini') return 'var(--f-space--s)';

    return 'var(--f-space--l)';
  },
  valueContainerColor({ valid, invalid }) {
    if (invalid) return 'var(--f-color-element--error)';
    if (valid) return 'var(--f-color-element--success)';

    return undefined;
  },
};

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${Icon} {
    margin-right: var(--f-space--m);
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: var(--f-space--m);
  color: ${styles.valueContainerColor};

  ${Icon} {
    display: block;
    margin-left: var(--f-space--m);
  }
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${styles.yPadding} var(--f-space--l);
  background-color: var(--f-color-element--primary);
  border-radius: var(--f-borderRadius--m);
  color: ${styles.color};
  transition: background-color 0.1s ease-out;
  cursor: ${({ hasAction }) => hasAction && 'pointer'};

  &:hover {
    background-color: ${({ hasAction }) =>
      hasAction && 'var(--f-color-element--inactive)'};
  }

  @media (max-width: 460px) {
    padding: ${({ size }) =>
      size === 'normal' && 'var(--f-space--xl) var(--f-space--l)'}};
  }
`;

StyledItem.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  size: PropTypes.string,
  hasAction: PropTypes.bool,
};
