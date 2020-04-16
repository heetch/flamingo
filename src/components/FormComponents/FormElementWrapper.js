import styled from 'styled-components';
import cx from 'classnames';
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

const FormElementWrapper = styled('div').attrs(({ className }) => ({
  className: cx('f-FormEl-wrapper', className),
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

export default FormElementWrapper;
