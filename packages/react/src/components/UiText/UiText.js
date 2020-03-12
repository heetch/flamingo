import React from 'react';
import PropTypes from 'prop-types';

import StyledUiText from './UiText.styles';
import { VARIANTS } from './UiText.constants';

const UiText = ({ variant, ...props }) => (
  <StyledUiText variant={variant} {...props} />
);

UiText.displayName = 'UiText';

UiText.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
};

UiText.defaultProps = {
  variant: VARIANTS.content,
};

UiText.VARIANTS = VARIANTS;

export default UiText;
