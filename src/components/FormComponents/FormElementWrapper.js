import styled from 'styled-components';
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

    return undefined;
  },
};

const FormElementWrapper = styled('div').attrs(() => ({
  className: 'f-FormEl-wrapper',
}))`
  display: flex;
  position: relative;
  min-width: 12.5rem;
  margin-top: ${theme.space.m};
  margin-bottom: ${theme.space.m};
  color: ${theme.color.text.primary};

  & + ${Helper}, ${Helper} {
    color: ${styles.helperColor};
    transition: color 0.2s ease-out;
  }
`;

FormElementWrapper.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormElementWrapper;
