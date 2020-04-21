import styled from 'styled-components';
import PropTypes from 'prop-types';

import Helper from '../Helper';

const styles = {
  helperColor({ invalid, valid, theme: { colors } }) {
    if (invalid) return colors.element.error;
    if (valid) return colors.element.success;
    return undefined;
  },
};

const FormElementWrapper = styled('div').attrs(() => ({
  className: 'f-FormEl-wrapper',
}))`
  display: flex;
  position: relative;
  min-width: 12.5rem;
  margin-top: ${({ theme }) => theme.spaces.m};
  margin-bottom: ${({ theme }) => theme.spaces.m};
  color: ${({ theme }) => theme.colors.text.primary};

  & + ${Helper} {
    color: ${styles.helperColor};
  }
`;

FormElementWrapper.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormElementWrapper;
