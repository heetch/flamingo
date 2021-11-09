import styled, { keyframes } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { theme } from '../../theme';

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
  --content-hSpacing: ${theme.space.xxl};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '33.75rem;'}; /* 540px */
  overflow: auto;
  z-index: calc(${theme.zIndex.overlay} + 1);
  background-color: ${theme.color.element.primary};
  animation: ${({ isOpen, animateOnMount }) =>
      isOpen ? animateOnMount && slideIn : slideOut}
    0.2s ease-out;

  ${theme.breakPoint.s} {
    --content-hSpacing: ${theme.space.xl};
  }
`;

StyledSidePanel.propTypes = {
  maxWidth: PropTypes.string,
  isOpen: PropTypes.bool,
  animateOnMount: PropTypes.bool,
};

export const Content = styled('div')`
  padding: ${theme.space.xxl} var(--content-hSpacing);
`;

export const Header = styled('div')`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  padding: ${theme.space.l} ${theme.space.xl};
  border-bottom: 1px solid ${theme.color.element.inactive};
  background: ${theme.color.element.primary};
  ${theme.breakPoint.sUp} {
    padding: ${theme.space.l} ${theme.space.xxl};
  }
`;

export const HeaderTitles = styled('div')`
  flex-grow: 1;
  align-self: center;
`;

export const Footer = styled('div')`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${theme.color.element.inactive};
  padding: 0 var(--content-hSpacing);
  background-color: #fff;
`;
