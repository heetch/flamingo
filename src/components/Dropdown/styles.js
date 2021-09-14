import styled from 'styled-components/macro';
import Overlay from '../Overlay';
import { StyledItem } from '../Item/styles';
import { theme } from '../../theme';

export const StyledDropdown = styled.div`
  --borderRadius: ${theme.borderRadius.s};
  border-radius: var(--borderRadius);
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(25, 1, 52, 0.12);
  z-index: calc(${theme.zIndex.overlay} + 1);

  ${theme.breakPoint.s} {
    position: fixed !important;
    top: 50% !important;
    left: ${theme.space.xl} !important;
    right: ${theme.space.xl} !important;
    transform: translateY(-50%) !important;
  }

  ${StyledItem} {
    padding: ${theme.space.m} ${theme.space.xl};
    border-radius: 0;
  }

  ${theme.breakPoint.s} {
    ${StyledItem} {
      padding-top: ${theme.space.l};
      padding-bottom: ${theme.space.l};
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

  ${theme.breakPoint.sUp} {
    & + ${Overlay} {
      display: none;
    }
  }
`;
