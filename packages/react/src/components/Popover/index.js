import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';

import UiText from '../UiText';

const PLACEMENTS = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

const placements = Object.values(PLACEMENTS);

const Popover = ({ content, children, placement }) => (
  <Manager>
    <Reference>
      {({ ref }) =>
        React.cloneElement(children, {
          ref,
          className: 'Popover-triggerer',
        })
      }
    </Reference>

    <Popper placement={placement} hide>
      {({ ref, style }) => (
        <div
          ref={ref}
          style={style}
          data-placement={placement}
          className={`Popover-wrapper is--${placement}`}
        >
          <div className='Popover'>
            <UiText type={UiText.TYPES.subContent} as='span'>
              {content}
            </UiText>
          </div>
        </div>
      )}
    </Popper>
  </Manager>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(placements),
};

Popover.defaultProps = {
  placement: PLACEMENTS.BOTTOM,
};

Popover.PLACEMENTS = PLACEMENTS;

export default Popover;
