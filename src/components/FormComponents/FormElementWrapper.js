import styled from 'styled-components';
import PropTypes from 'prop-types';

import Helper from '../Helper';

const styles = {
  helperColor(props) {
    if (props.invalid) {
      return 'var(--f-color-element--error)';
    }
    if (props.valid) {
      return 'var(--f-color-element--success)';
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
  margin-top: var(--f-space--m);
  margin-bottom: var(--f-space--m);
  color: var(--f-color-text--primary);

  & + ${Helper} {
    color: ${styles.helperColor};
  }
`;

FormElementWrapper.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormElementWrapper;
