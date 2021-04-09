import styled, { keyframes } from 'styled-components';

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
  position: flex;
  color: var(--f-color-text--secondary);
  max-width: 280px;
  white-space: normal;
  right: 200px;
  box-shadow: 0px 2px 10px rgba(25, 1, 52, 0.12);
  bottom: ${({ position }) => position !== 'top' && '250px'};
  top: ${({ position }) => position === 'top' && '250px'};
  border: 0;
  border-radius: var(--f-borderRadius--m);
  animation: ${({ isVisible }) => (isVisible ? fadeDown : fadeUp)} 0.3s ease-out;

  > div {
    margin: 0;
  }

  .f-Alert {
    border-radius: var(--f-borderRadius--m);
    border-width: 0;
  }

  .f-Alert h1 {
    margin: 10px;
    font-weight: normal;
  }

  .f-Alert-icon {
    border-top-left-radius: var(--f-borderRadius--m);
    border-bottom-left-radius: var(--f-borderRadius--m);
  }

  .f-Button {
    top: calc(50% - 20px);
    margin-right: 10px;
  }

  .f-Alert .f-Button svg {
    width: 20px;
  }

  .f-Button .f-Icon {
    width: 20px;
    height: 20px;
  }
`;
