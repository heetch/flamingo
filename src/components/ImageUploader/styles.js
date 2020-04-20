import styled from 'styled-components';
import FileUploader from '../FileUploader';

export const StyledImageUploader = styled(FileUploader)`
  height: ${({ hasPreview }) => hasPreview && 'var(--f-FileUploader-height)'};

  .f-ImageUploader-preview,
  .f-ImageUploader-hoverState {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 1rem;
  }

  .f-ImageUploader-hoverState {
    background: rgba(25, 1, 52, 0.8); /* --f-color-text--primary */
    padding: 0 var(--f-space--m);
    text-align: right;
    opacity: 0;
    z-index: 15;
    transition: opacity 0.1s ease-out;
  }

  &:hover .f-ImageUploader-hoverState {
    opacity: 1;
  }

  .f-UploaderItem-iconContainer {
    border-color: transparent;
  }
`;

export const UploaderPreview = styled.div`
  background-size: cover;
  background-position: center center;
  z-index: 10;
  background-image: url(${({ preview }) => preview});
`;
