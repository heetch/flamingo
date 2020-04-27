import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import styled from 'styled-components';

import { theme } from '../../theme';
import UiText from '../UiText';

const PLACEMENTS = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

const placements = Object.values(PLACEMENTS);

export const PopoverWrapper = styled.div`
  padding: ${theme.space.s};
  opacity: 0;
  transition: opacity 0.1s ease-out;
`;

export const Trigerrer = styled('div').attrs(() => ({
  className: 'f-Popover-triggerer',
}))`
  &:hover + ${PopoverWrapper} {
    opacity: 1;
  }
`;

export const StyledPopover = styled.div`
  padding: ${theme.space.s} ${theme.space.m};
  color: ${theme.color.text.white};
  background-color: rgba(25, 1, 52, 0.8);
  border-radius: ${theme.borderRadius.s};
`;

const Popover = ({ content, children, placement }) => (
  <Manager>
    <Reference>
      {({ ref }) =>
        React.cloneElement(<Trigerrer>{children}</Trigerrer>, {
          ref,
        })
      }
    </Reference>

    <Popper placement={placement} hide>
      {({ ref, style }) => (
        <PopoverWrapper
          ref={ref}
          style={style}
          data-placement={placement}
          className={`f-Popover-wrapper`}
        >
          <StyledPopover className='f-Popover'>
            <UiText variant={UiText.VARIANTS.subContent} as='span'>
              {content}
            </UiText>
          </StyledPopover>
        </PopoverWrapper>
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
