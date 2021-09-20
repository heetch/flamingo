import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Helper from '../Helper';
import { theme } from '../../theme';

const styles = {
  helperColor(props) {
    if (props.invalid) {
      return theme.color.element.error;
    }
    if (props.valid) {
      return theme.color.element.success;
    }

    return theme.color.text.tertiary;
  },
};

const FormElementWrapper = styled('div').attrs(() => ({
  className: 'f-FormEl-wrapper',
}))`
  display: flex;
  position: relative;
  min-width: 12.5rem;
  margin-top: ${theme.space.s};
  margin-bottom: ${theme.space.s};
  color: ${theme.color.text.primary};

  & + ${Helper}, ${Helper} {
    color: ${styles.helperColor};
    font-size: ${theme.fontSize.xs};
    transition: color 0.2s ease-out;
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.s};
  }
`;

FormElementWrapper.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormElementWrapper;
