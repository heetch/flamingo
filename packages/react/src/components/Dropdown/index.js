import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';

import Overlay from '../Overlay';

const Dropdown = ({
  children,
  clickOutsideToHide,
  isOpen: isOpenProp,
  onHide,
  onOpen,
  triggerer,
  placement,
  portalNode,
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenProp);

  const open = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  const [popperNode, setPopperNode] = React.useState();
  const [refNode, setRefNode] = React.useState();

  const renderFnProps = { isOpen, open, hide, toggle };
  const usePortal = !!portalNode;

  const renderChildren = ({ ref, style }) => {
    if (!isOpen) return null;

    const elements = (
      <>
        <div
          className='f-DropdownList'
          ref={ref}
          style={style}
          data-placement={placement}
        >
          {children(renderFnProps)}
        </div>

        <Overlay className='f-DropdownOverlay' />
      </>
    );

    return usePortal ? ReactDOM.createPortal(elements, portalNode) : elements;
  };

  React.useEffect(() => {
    if (isOpen) onOpen();
    else onHide();
  }, [isOpen, onHide, onOpen]);

  React.useEffect(() => {
    const onDocumentClick = ({ target }) => {
      if (!clickOutsideToHide) {
        return;
      }

      if (
        popperNode &&
        !popperNode.contains(target) &&
        refNode &&
        !refNode.contains(target)
      ) {
        hide();
      }
    };

    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [clickOutsideToHide, popperNode, refNode]);

  return (
    <Manager>
      <Reference innerRef={setRefNode}>
        {({ ref }) => triggerer({ ...renderFnProps, ref })}
      </Reference>

      <Popper
        modifiers={{
          offset: {
            offset: '0, 4px',
          },
        }}
        innerRef={setPopperNode}
        placement={placement}
      >
        {renderChildren}
      </Popper>
    </Manager>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
  clickOutsideToHide: PropTypes.bool,
  isOpen: PropTypes.bool,
  onHide: PropTypes.func,
  onOpen: PropTypes.func,
  triggerer: PropTypes.func.isRequired,
  placement: PropTypes.string, // https://popper.js.org/docs/v1/#Popper.placements
  portalNode: PropTypes.instanceOf(HTMLElement),
};

Dropdown.defaultProps = {
  clickOutsideToHide: true,
  isOpen: false,
  onHide: () => {},
  onOpen: () => {},
  placement: 'bottom-end',
  portalNode: null,
};

export default Dropdown;
