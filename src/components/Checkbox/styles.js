import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const StyledCheckbox = styled('input').attrs(({ defaultChecked }) => ({
  className: 'f-Checkbox',
  type: 'checkbox',
  defaultChecked,
}))`
  --size: ${({ size }) => size || theme.iconSize.l} /* 20px */;

  position: relative;
  appearance: none;
  background-color: ${({ isUndefined }) =>
    isUndefined ? theme.color.brand.primary : theme.color.element.primary};
  min-width: var(--size);
  margin-right: ${theme.space.l};
  height: var(--size);
  border: 1px solid ${theme.color.element.tertiary};
  border-radius: ${theme.space.s};
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: ${theme.color.element.secondary};
  }

  &:checked {
    background-color: ${theme.color.brand.primary};
    border-color: ${theme.color.brand.primary};
  }

  &:disabled {
    border-color: ${theme.color.element.tertiary};
    background-color: ${theme.color.element.inactive};
    cursor: not-allowed;
  }

  &:disabled:after {
    border-color: var(--f-color-icon--disabled);
  }

  /* Icons */
  &:checked:after {
    content: '';
    width: 10px;
    height: 5px;
    position: absolute;
    top: 4px;
    left: 3px;
    border-left: 2px solid ${theme.color.element.primary};
    border-bottom: 2px solid ${theme.color.element.primary};
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
        border-bottom: 2px solid ${theme.color.element.primary};
      }
    `}
`;
