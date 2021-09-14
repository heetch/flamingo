import styled, { keyframes } from 'styled-components';
import Alert from '../Alert';

export const fadeDown = keyframes`
  0% {
    opacity: 0;
    margin-right: -100px
  }
  100% {
    opacity: 1;
    margin-right: 0;
  }
`;

export const fadeUp = keyframes`
  0% {
    opacity: 1;
    margin-right: 0;
  }
  100% {
    opacity: 0;
    margin-right: -100px;
  }
`;

export const StyledToastWrapper = styled.div`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex || '10'};
  right: 20px;
  bottom: ${({ position }) => position !== 'top' && '25px'};
  top: ${({ position }) => position === 'top' && '25px'};
  animation: ${({ isVisible }) => (isVisible ? fadeDown : fadeUp)} 0.3s ease-out;
`;

export const StyledAlert = styled(Alert)``;
