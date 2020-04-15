import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import Heading from '../Heading';
import IconButton from '../IconButton';
import Overlay from '../Overlay';
import Button from '../Button';

const SidePanel = props => {
  const { footer, header } = props;

  // animateOnMount makes the panel closed by default so that on the first render
  // It is set to props.isOpen (through the useEffect)
  // if props.isOpen is true, then it will animate <3
  const [isOpen, setIsOpen] = React.useState(
    props.animateOnMount ? false : props.isOpen,
  );

  const handleClose = () => {
    setIsOpen(false);
    props.onClose();
  };

  const onOverlayClick = () => {
    if (props.closesOnOverlayClick) {
      handleClose();
    }
  };

  React.useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <>
      <Overlay onClick={onOverlayClick} isOpen={isOpen} />

      <StyledSidePanel
        className={cx('f-SidePanel', props.className)}
        {...props}
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
  animateOnMount: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.node,
  header: PropTypes.node,
};

SidePanel.defaultProps = {
  isOpen: false,
  onClose: () => {},
  animateOnMount: false,
};

const StyledSidePanel = styled('div')`
  --content-hSpacing: var(--f-space--xxl);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 33.75rem; /* 540px */
  overflow: auto;
  z-index: calc(var(--f-zIndex--Overlay) + 1);
  transition: transform 0.1s ease-out;
  background-color: var(--f-color-element--primary);
  pointer-events: ${({ isOpen }) => (isOpen ? 'inherit' : 'none')};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

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
