import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';

import Overlay from '../Overlay';

const Dropdown = ({
  children,
  clickOutsideToHide,
  isOpen: isOpenProp,
  triggerer,
  placement,
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenProp);

  const open = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  const [popperNode, setPopperNode] = React.useState();
  const [refNode, setRefNode] = React.useState();

  const renderFnProps = { isOpen, open, hide, toggle };

  React.useEffect(() => {
    const onDocumentClick = ({ target }) => {
      if (!clickOutsideToHide) {
        return;
      }

      if (!popperNode.contains(target) && !refNode.contains(target)) {
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
            offset: '0 4px',
          },
        }}
        innerRef={setPopperNode}
        placement={placement}
      >
        {({ ref, style }) =>
          isOpen && (
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
          )
        }
      </Popper>
    </Manager>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
  clickOutsideToHide: PropTypes.bool,
  isOpen: PropTypes.bool,
  triggerer: PropTypes.func.isRequired,
  placement: PropTypes.string, // https://popper.js.org/docs/v1/#Popper.placements
};

Dropdown.defaultProps = {
  clickOutsideToHide: true,
  isOpen: false,
  placement: 'bottom-end',
};

export default Dropdown;
