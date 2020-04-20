import styled from 'styled-components';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import UiText from '../UiText';
import Icon from '../Icon';

const styles = {
  textColor({ invalid, valid }) {
    if (invalid) return 'var(--f-color-element--error)';
    if (valid) return 'var(--f-color-element--success)';

    return 'var(--f-color-text--secondary)';
  },
  borderColor({ invalid, valid, hasFile }) {
    if (hasFile) return 'transparent';
    if (invalid) return 'var(--f-color-element--error)';
    if (valid) return 'var(--f-color-element--success)';

    return 'var(--f-color-element--tertiary)';
  },
};
export const StyledFileUploader = styled(FormElementWrapper)`
  position: relative;
  width: 100%;
  flex-direction: column;
  margin: var(--f-space--m) 0;
  border-radius: var(--f-borderRadius--l);
  color: ${styles.textColor};
  background-color: var(--f-color-element--primary);
  transition: all 0.15s ease-out;
  border: 1px dashed ${styles.borderColor};
  height: ${({ hasFile }) =>
    hasFile ? 'auto' : 'var(--f-FileUploader-height)'};
  text-align: ${({ hasFile }) => hasFile && 'center'};

  &:hover {
    border-color: ${({ hasFile }) => hasFile && 'var(--f-color-brandPrimary)'};
    color: ${({ hasFile }) => hasFile && 'var(--f-color-brandPrimary)'};
  }

  @media (max-width: 460px) {
    /* --f-breakpoint--s */
    max-width: inherit;
  }

  .f-FileUploader-inputContainer {
    display: none;
  }
`;

export const FileUploaderLabel = styled(UiText).attrs(props => ({
  className: 'f-FileUploader-label',
  as: props.as || 'label',
  variant: 'subContentBold',
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: color 0.15s ease-out;

  &:hover {
    color: var(--f-color-brandPrimary);
  }

  &.f-FileUploader-state--addFiles {
    padding: var(--f-space--l);
  }

  ${Icon} {
    margin-bottom: ${({ withIcon }) => withIcon && 'var(--f-space--m)'};
  }
`;
