import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '../IconButton';
import { theme } from '../../theme';

const Pagination = props => {
  // Don't show it if both are disabled
  if (props.prevDisabled && props.nextDisabled) {
    return null;
  }

  const { translations } = props;

  return (
    <Container className={props.className} position={props.position}>
      <ArrowIcon
        data-testid={'pagination-prev'}
        icon={'IconArrowLeft'}
        onClick={props.goPrev}
        css={{ marginLeft: '24px' }}
        disabled={props.prevDisabled}
        title={`${translations.previous} ${
          props.prevDisabled ? `- ${translations.disabled}` : ''
        }`}
      />

      <ArrowIcon
        data-testid={'pagination-next'}
        icon={'IconArrowRight'}
        onClick={props.goNext}
        disabled={props.nextDisabled}
        title={`${translations.next} ${
          props.nextDisabled ? `- ${translations.disabled}` : ''
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
  translations: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    disabled: PropTypes.string,
  }),
  position: PropTypes.string,
};

Pagination.defaultProps = {
  translations: {
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
