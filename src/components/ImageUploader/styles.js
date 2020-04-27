import styled from 'styled-components';

import FileUploader from '../FileUploader';
import { theme } from '../../theme';

export const PreviewHover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 1rem;
  background: rgba(25, 1, 52, 0.8); /* --f-color-text--primary */
  padding: 0 ${theme.space.m};
  text-align: right;
  opacity: 0;
  z-index: 15;
  transition: opacity 0.1s ease-out;
`;

export const UploaderPreview = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;
  z-index: 10;
  background-image: url(${({ preview }) => preview});
`;

export const StyledImageUploader = styled(FileUploader)`
  height: ${({ hasPreview }) => hasPreview && 'var(--f-FileUploader-height)'};

  &:hover ${PreviewHover} {
    opacity: 1;
  }

  .f-UploaderItem-iconContainer {
    border-color: transparent;
  }
`;
