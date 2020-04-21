import styled from 'styled-components';
import Overlay from '../Overlay';
import { StyledItem } from '../Item/styles';

export const StyledDropdown = styled.div`
  --borderRadius: var(--f-borderRadius--m);
  border-radius: var(--borderRadius);
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(25, 1, 52, 0.12);
  z-index: calc(var(--f-zIndex--Overlay) + 1);

  @media (max-width: 460px) {
    position: fixed !important;
    top: 50% !important;
    left: var(--f-space--xl) !important;
    right: var(--f-space--xl) !important;
    transform: translateY(-50%) !important;
  }

  ${StyledItem} {
    padding: var(--f-space--m) var(--f-space--xl);
    border-radius: 0;
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    ${StyledItem} {
      padding-top: var(--f-space--l);
      padding-bottom: var(--f-space--l);
    }
  }

  & > *:first-child {
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  & > *:last-child {
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }

  @media (min-width: 460px) {
    /* --f-breakpoint--s */
    & + ${Overlay} {
      display: none;
    }
  }
`;
