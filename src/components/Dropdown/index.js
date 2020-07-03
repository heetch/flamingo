import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';

import Overlay from '../Overlay';
import { StyledDropdown } from './styles';

const Dropdown = ({
  children,
  clickOutsideToHide,
  onHide,
  onOpen,
  portalNode,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [popperNode, setPopperNode] = React.useState();
  const [refNode, setRefNode] = React.useState();

  const renderFnProps = {
    isOpen,
    open: () => setIsOpen(true),
    hide: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
  };

  const usePortal = !!portalNode;

  const renderChildren = ({ ref, style }) => {
    if (!isOpen) return null;

    const elements = (
      <>
        <StyledDropdown
          className='f-DropdownList'
          ref={ref}
          style={style}
          data-placement={props.placement}
        >
          {children(renderFnProps)}
        </StyledDropdown>

        <Overlay />
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
        setIsOpen(false);
      }
    };

    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [clickOutsideToHide, popperNode, refNode]);

  return (
    <Manager>
      <Reference innerRef={setRefNode}>
        {({ ref }) => props.triggerer({ ...renderFnProps, ref })}
      </Reference>

      <Popper
        modifiers={{
          offset: {
            offset: '0, 4px',
          },
          ...props.modifiers,
        }}
        innerRef={setPopperNode}
        placement={props.placement}
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
  portalNode: PropTypes.instanceOf(
    typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
  ),
  modifiers: PropTypes.shape({}), // https://popper.js.org/docs/v1/#modifiers
};

Dropdown.defaultProps = {
  clickOutsideToHide: true,
  onHide: () => {},
  onOpen: () => {},
  placement: 'bottom-end',
  portalNode: null,
};

export default Dropdown;
