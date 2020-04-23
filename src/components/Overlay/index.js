import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 
  100%{
    opacity: 0.8;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0.8;
  } 
  100%{
    opacity: 0;
  }
`;

const styles = {
  // If we don't a isOpen value it won't animate
  animation({ isOpen, animateOnMount }) {
    if (isOpen && animateOnMount) return fadeIn;
    if (isOpen === false) return fadeOut;

    return '';
  },
};

const Overlay = styled('div').attrs(() => ({ className: 'f-Overlay' }))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--f-color-element--overlay);
  z-index: var(--f-zIndex--Overlay);
  animation: ${styles.animation} 0.2s ease-out;
  opacity: 0.8;
`;

Overlay.propTypes = {
  isOpen: PropTypes.boolean,
  animateOnMount: PropTypes.boolean,
};

export default Overlay;
