import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled, { keyframes } from 'styled-components';

import Heading from '../Heading';
import IconButton from '../IconButton';
import Overlay from '../Overlay';
import Button from '../Button';

/**
 * SidePanel will animate while mounting and un-mounting
 * The `isOpen` prop controls the animation. \
 *  isOpen state is used to be able to close on click rather than by prop
 * while `shouldRender` state controls the rendering
 */
const SidePanel = props => {
  const { footer, header } = props;

  const [shouldRender, setShouldRender] = React.useState(props.isOpen);
  const [isOpen, setIsOpen] = React.useState(props.isOpen);

  const onAnimationEnd = () => {
    if (!props.isOpen || !isOpen) setShouldRender(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    props.onClose();
  };

  React.useEffect(() => {
    if (props.isOpen) setShouldRender(props.isOpen);

    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <Overlay
        onClick={props.closesOnOverlayClick && handleClose}
        isOpen={isOpen}
        animateOnMount={props.animateOnMount}
      />

      <StyledSidePanel
        {...props}
        className={cx('f-SidePanel', props.className)}
        onAnimationEnd={onAnimationEnd}
        isOpen={isOpen}
      >
        <Header className='f-SidePanel-header'>
          {header ? (
            <div className='f-SidePanel-headerContent'>{header}</div>
          ) : (
            <Heading level={4} as='h1'>
              {props.title}
            </Heading>
          )}

          <IconButton icon={IconButton.ICONS.IconCross} onClick={handleClose} />
        </Header>

        <div>
          <Content>{props.children}</Content>
          {footer && <Footer className='f-SidePanel-footer'>{footer}</Footer>}
        </div>
      </StyledSidePanel>
    </>
  );
};

SidePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closesOnOverlayClick: PropTypes.bool,
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.node,
  header: PropTypes.node,
  maxWidth: PropTypes.string,
  animateOnMount: PropTypes.bool,
};

SidePanel.defaultProps = {
  isOpen: false,
  onClose: () => {},
  animateOnMount: true,
};

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

const StyledSidePanel = styled('div')`
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

const Content = styled('div')`
  padding: var(--f-space--xxl) var(--content-hSpacing);
`;

const Header = styled('div')`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--f-space--m) var(--content-hSpacing);
  border-bottom: 1px solid var(--f-color-element--inactive);
`;

const Footer = styled('div')`
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
export default SidePanel;
