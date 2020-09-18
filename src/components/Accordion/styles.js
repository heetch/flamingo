import styled from 'styled-components';
// import { theme } from '../../theme';

export const StyledAccordion = styled.div`
  background-color: red;
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  }
  .tab {
    width: 100%;
    color: white;
    overflow: hidden;
    .tab-label {
      display: flex;
      justify-content: space-between;
      padding: 1em;
      background: #333300;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background: #333300;
      }
      &:after {
        content: '\\276F';
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
    }
    .tab-content {
      max-height: 0;
      padding: 0 1em;
      color: #333300;
      background: white;
      transition: all 0.35s;
    }
    .tab-close {
      display: flex;
      justify-content: flex-end;
      padding: 1em;
      font-size: 0.75em;
      background: #333300;
      cursor: pointer;
      &:hover {
        background: #333300;
      }
    }
  }
  input:checked {
    & + .tab-label {
      background: blue;
      &:after {
        transform: rotate(90deg);
      }
    }
    & ~ .tab-content {
      max-height: 100vh;
      padding: 1em;
    }
  }
`;
