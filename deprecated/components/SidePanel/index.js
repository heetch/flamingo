import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Heading from '../Heading';
import IconButton from '../IconButton';
import Overlay from '../Overlay';

const SidePanel = ({
  children,
  className,
  closesOnOverlayClick,
  footer,
  isOpen: isOpenProp,
  onClose,
  title,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenProp);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const handleClose = () => {
    toggleIsOpen();
    onClose();
  };

  const onOverlayClick = () => {
    if (closesOnOverlayClick) {
      handleClose();
    }
  };

  React.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  return (
    <>
      <Overlay
        className={cx({
          'is-hidden': !isOpen,
        })}
        onClick={onOverlayClick}
      />

      <div
        className={cx('f-SidePanel', className, {
          'is-open': isOpen,
        })}
        {...props}
      >
        <div className='f-SidePanel-header'>
          <Heading level={4} as='h1'>
            {title}
          </Heading>

          <IconButton icon={IconButton.ICONS.IconCross} onClick={handleClose} />
        </div>

        <div className='f-SidePanel-contentWrapper'>
          <div className='f-SidePanel-content'>{children}</div>
          {footer && <div className='f-SidePanel-footer'>{footer}</div>}
        </div>
      </div>
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
};

SidePanel.defaultProps = {
  children: undefined,
  className: undefined,
  closesOnOverlayClick: undefined,
  footer: undefined,
  isOpen: false,
  onClose: () => {},
  title: undefined,
};

export default SidePanel;
