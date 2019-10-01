import React from "react";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";

import UI from "../UI";
import { POPOVER_PLACEMENTS } from "../../constants";

const placements = Object.values(POPOVER_PLACEMENTS);

const Popover = ({ content, children, placement }) => (
  <Manager>
    <Reference>
      {({ ref }) =>
        React.cloneElement(children, {
          className: "Popover-wrapper",
          forwardedRef: ref,
        })
      }
    </Reference>

    <Popper placement={placement} hide>
      {({ ref, style }) => (
        <div
          ref={ref}
          style={style}
          data-placement={placement}
          className={`Popover Popover--${placement}`}
        >
          <UI type={UI.TYPES.SubContent} as="span">
            {content}
          </UI>
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
  placement: POPOVER_PLACEMENTS.BOTTOM,
};

Popover.PLACEMENTS = POPOVER_PLACEMENTS;

export default Popover;
