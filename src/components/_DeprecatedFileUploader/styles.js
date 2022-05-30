import styled from 'styled-components/macro';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import UiText from '../UiText';
import Icon from '../Icon';
import { theme } from '../../theme';

const styles = {
  textColor({ invalid, valid }) {
    if (invalid) return theme.color.element.error;
    if (valid) return theme.color.element.success;

    return theme.color.text.secondary;
  },
  borderColor({ invalid, valid, hasFile }) {
    if (hasFile) return 'transparent';
    if (invalid) return theme.color.element.error;
    if (valid) return theme.color.element.success;

    return theme.color.element.tertiary;
  },
};

export const StyledFileUploader = styled(FormElementWrapper)`
  position: relative;
  width: 100%;
  flex-direction: column;
  margin: ${theme.space.m} 0;
  border-radius: ${theme.borderRadius.l};
  color: ${styles.textColor};
  background-color: ${theme.color.element.primary};
  transition: all 0.15s ease-out;
  border: 1px dashed ${styles.borderColor};
  height: ${({ hasFile }) =>
    hasFile ? 'auto' : 'var(--f-FileUploader-height)'};
  text-align: ${({ hasFile }) => hasFile && 'center'};

  &:hover {
    border-color: ${({ hasFile }) => !hasFile && theme.color.brand.primary};
    color: ${({ hasFile }) => !hasFile && theme.color.brand.primary};
  }

  ${theme.breakPoint.s} {
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
  cursor: pointer;

  &:hover {
    color: ${theme.color.brand.primary};
  }

  &.f-FileUploader-state--addFiles {
    padding: ${theme.space.l};
  }

  ${Icon} {
    margin-bottom: ${({ withIcon }) => withIcon && theme.space.s};
  }
`;
