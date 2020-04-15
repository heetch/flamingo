import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled(({ isOpen, ...rest }) => (
  <div className={'f-Overlay'} {...rest} />
))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--f-color-element--overlay);
  z-index: var(--f-zIndex--Overlay);
  transition: opacity 0.2s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? 0.8 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'inherit' : 'none')};
`;

Overlay.propTypes = {
  isOpen: PropTypes.boolean,
};

export default Overlay;
