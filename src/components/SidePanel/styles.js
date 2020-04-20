import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  } 
  100%{
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  } 
  100%{
    transform: translateX(100%);
  }
`;

export const StyledSidePanel = styled('div')`
  --content-hSpacing: var(--f-space--xxl);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '33.75rem;'} /* 540px */
  overflow: auto;
  z-index: calc(var(--f-zIndex--Overlay) + 1);
  background-color: var(--f-color-element--primary);
  animation: ${({ isOpen, animateOnMount }) =>
    isOpen ? animateOnMount && slideIn : slideOut} 0.2s ease-out;

  @media (max-width: 460px) {
    --content-hSpacing: var(--f-space--xl);
  }
`;

StyledSidePanel.propTypes = {
  maxWidth: PropTypes.string,
  isOpen: PropTypes.bool,
  animateOnMount: PropTypes.bool,
};

export const Content = styled('div')`
  padding: var(--f-space--xxl) var(--content-hSpacing);
`;

export const Header = styled('div')`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--f-space--m) var(--content-hSpacing);
  border-bottom: 1px solid var(--f-color-element--inactive);
`;

export const Footer = styled('div')`
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid var(--f-color-element--inactive);
    padding: 0 var(--content-hSpacing);

   ${Button} + ${Button} {
    margin-left: var(--f-space--m);
  }
`;
