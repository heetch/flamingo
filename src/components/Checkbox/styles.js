import styled, { css } from 'styled-components';

export const StyledCheckbox = styled('input').attrs(({ defaultChecked }) => ({
  className: 'f-Checkbox',
  type: 'checkbox',
  defaultChecked,
}))`
  --size: ${({ size }) => size || '1.25rem'} /* 20px */;

  position: relative;
  appearance: none;
  background-color: ${({ isUndefined }) =>
    isUndefined
      ? 'var(--f-color-brandPrimary)'
      : 'var(--f-color-element--primary)'};
  min-width: var(--size);
  margin-right: var(--f-space--l);
  height: var(--size);
  border: 1px solid var(--f-color-element--tertiary);
  border-radius: var(--f-space--s);
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: var(--f-color-element--secondary);
  }

  &:disabled {
    border-color: var(--f-color-element--tertiary) !important;
    background-color: var(--f-color-element--inactive) !important;
    cursor: not-allowed;
  }

  &:checked {
    background-color: var(--f-color-brandPrimary);
    border-color: var(--f-color-brandPrimary);
  }

  &:disabled:after {
    border-color: var(--f-color-icon--disabled) !important;
  }

  /* Icons */
  &:checked:after {
    content: '';
    width: 10px;
    height: 5px;
    position: absolute;
    top: 4px;
    left: 3px;
    border-left: 2px solid var(--f-color-element--primary);
    border-bottom: 2px solid var(--f-color-element--primary);
    transform: rotate(-45deg);
  }

  ${({ isUndefined }) =>
    isUndefined &&
    css`
      :after {
        content: '';
        width: 12px;
        height: 1px;
        position: absolute;
        top: 7px;
        left: 3px;
        border-bottom: 2px solid var(--f-color-element--primary);
      }
    `}
`;