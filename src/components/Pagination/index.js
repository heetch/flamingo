import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '../IconButton';
import { theme } from '../../theme';

const Pagination = ({
  className,
  position,
  prevDisabled,
  nextDisabled,
  translate,
  goPrev,
  goNext,
}) => {
  // Don't show it if both are disabled
  if (prevDisabled && nextDisabled) {
    return null;
  }

  return (
    <Container className={className} position={position}>
      <ArrowIcon
        data-testid={'pagination-prev'}
        icon={'IconArrowLeft'}
        onClick={goPrev}
        disabled={prevDisabled}
        title={`${translate.previous} ${
          prevDisabled ? `- ${translate.disabled}` : ''
        }`}
      />

      <ArrowIcon
        data-testid={'pagination-next'}
        icon={'IconArrowRight'}
        onClick={goNext}
        disabled={nextDisabled}
        title={`${translate.next} ${
          nextDisabled ? `- ${translate.disabled}` : ''
        }`}
      />
    </Container>
  );
};

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  goPrev: PropTypes.func.isRequired,
  prevDisabled: PropTypes.bool,
  goNext: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool,
  className: PropTypes.string,
  translate: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    disabled: PropTypes.string,
  }),
  position: PropTypes.string,
};

Pagination.defaultProps = {
  translate: {
    next: 'Next',
    previous: 'Previous',
    disabled: 'Disabled',
  },
};

const Container = styled('div')`
  display: flex;
  justify-content: ${({ position }) => position || 'flex-end'};
  padding: 20px 0 10px;
`;

const ArrowIcon = styled(IconButton)`
  i {
    width: 16px;
    height: 16px;

    svg {
      fill: ${({ disabled }) =>
        disabled ? theme.color.element.inactive : theme.color.text.link};
      width: 16px;
    }
  }
`;

export default Pagination;
