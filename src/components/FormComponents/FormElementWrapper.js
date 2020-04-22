import styled from 'styled-components';
import PropTypes from 'prop-types';

import Helper from '../Helper';

const styles = {
  helperColor({ invalid, valid, theme: { color } }) {
    if (invalid) return color.element.error;
    if (valid) return color.element.success;
    return undefined;
  },
};

const FormElementWrapper = styled('div').attrs(() => ({
  className: 'f-FormEl-wrapper',
}))`
  display: flex;
  position: relative;
  min-width: 12.5rem;
  margin-top: ${({ theme }) => theme.space.m};
  margin-bottom: ${({ theme }) => theme.space.m};
  color: ${({ theme }) => theme.color.text.primary};

  & + ${Helper} {
    color: ${styles.helperColor};
  }
`;

FormElementWrapper.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormElementWrapper;
