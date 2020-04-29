import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Heading from '../Heading';
import IconButton from '../IconButton';
import Overlay from '../Overlay';

import { StyledSidePanel, Content, Header, Footer } from './styles';

/**
 * SidePanel will animate while mounting and un-mounting
 * `isOpen` controls the animation while `shouldRender` state controls the rendering
 *  We need 2 states because we need to know when it's animating and when to render
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
        className={cx('f-SidePanel', props.className)}
        onAnimationEnd={onAnimationEnd}
        maxWidth={props.maxWidth}
        isOpen={isOpen}
        animateOnMount={props.animateOnMount}
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

export default SidePanel;
