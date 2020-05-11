import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuList } from '@chakra-ui/core';

// import Overlay from '../Overlay';
import Item from '../Item';
// import { StyledDropdown } from './styles';

const Dropdown = ({ children, triggerer, ...props }) => {
  return (
    <Menu {...props} isOpen>
      {innerProps => (
        <>
          {triggerer(innerProps)}

          <MenuList
            rounded='m'
            p={0}
            boxShadow='0 2px 10px rgba(25, 1, 52, 0.12)'
          >
            {children(innerProps)}
          </MenuList>
        </>
      )}
    </Menu>

    // <Manager>
    //   <Reference innerRef={setRefNode}>
    //     {({ ref }) => props.triggerer({ ...renderFnProps, ref })}
    //   </Reference>

    //   <Popper
    //     modifiers={{
    //       offset: {
    //         offset: '0, 4px',
    //       },
    //       ...props.modifiers,
    //     }}
    //     innerRef={setPopperNode}
    //     placement={props.placement}
    //   >
    //     {renderChildren}
    //   </Popper>
    // </Manager>
  );
};

Dropdown.Item = Item;
Dropdown.Triggerer = MenuButton;

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
