import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';

const Dropdown = ({ children, triggerer, placement }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  const [popperNode, setPopperNode] = React.useState();
  const [refNode, setRefNode] = React.useState();

  const renderFnProps = { isOpen, open, hide, toggle };

  React.useEffect(() => {
    const onDocumentClick = ({ target }) => {
      if (!popperNode.contains(target) && !refNode.contains(target)) {
        hide();
      }
    };

    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [popperNode, refNode]);

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
        {({ ref, style }) => (
          <div
            className={cx('f-DropdownList', { 'is-hidden': !isOpen })}
            ref={ref}
            style={style}
            data-placement={placement}
          >
            {children(renderFnProps)}
          </div>
        )}
      </Popper>
    </Manager>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
  triggerer: PropTypes.func.isRequired,
  placement: PropTypes.string, // https://popper.js.org/docs/v1/#Popper.placements
};

Dropdown.defaultProps = {
  placement: 'bottom-end',
};

export default Dropdown;
