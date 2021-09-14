import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import IconButton from '../IconButton';
import { theme } from '../../theme';

const texts = {
  next: {
    id: 'flamingo.pagination.next',
    defaultText: 'Next',
  },
  previous: {
    id: 'flamingo.pagination.previous',
    defaultText: 'Previous',
  },
  disabled: {
    id: 'flamingo.pagination.disabled',
    defaultText: 'Disabled',
  },
};

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
        title={`${translate(texts.previous)} ${
          prevDisabled ? `- ${translate(texts.disabled)}` : ''
        }`}
      />

      <ArrowIcon
        data-testid={'pagination-next'}
        icon={'IconArrowRight'}
        onClick={goNext}
        disabled={nextDisabled}
        title={`${translate(texts.next)} ${
          nextDisabled ? `- ${translate(texts.disabled)}` : ''
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
  translate: PropTypes.func,
  position: PropTypes.string,
};

Pagination.defaultProps = {
  translate: ({ defaultText }) => defaultText,
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
