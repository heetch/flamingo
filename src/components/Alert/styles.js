import styled from 'styled-components';
import IconButton from '../IconButton';

const styles = {
  color({ type }) {
    if (type === 'error') return 'var(--f-color-element--error)';
    if (type === 'success') return 'var(--f-color-element--success)';
    if (type === 'information') return 'var(--f-color-brandSecondary)';

    return undefined;
  },
};

export const StyledAlert = styled('div').attrs(() => ({
  className: 'f-Alert',
}))`
  --iconSize: ${({ iconSize }) => iconSize || 'var(--f-iconSize--m)'};
  text-align: left;
  position: relative;
  margin: var(--f-space--m) 0;
  padding: var(--f-space--xl)
    calc(var(--f-space--m) * 2 + var(--iconSize) + var(--f-space--xl));
  font-size: var(--f-fontSize--m);
  line-height: var(--f-lineHeight--m);
  border-radius: var(--f-space--m);
  background-color: var(--f-color-element--primary);
  border: 2px solid ${styles.color};
`;

export const AlertIcon = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0 var(--f-space--m);
  color: var(--f-color-icon--white);
  background-color: ${styles.color};
`;

export const CloseButton = styled(IconButton)`
  width: initial;
  position: absolute;
  top: var(--f-space--s);
  right: var(--f-space--s);
  cursor: pointer;
  margin: 0;
`;
