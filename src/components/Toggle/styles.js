import styled from 'styled-components/macro';
import FormElementWrapper from '../FormComponents/FormElementWrapper';
import { theme } from '../../theme';

const styles = {
  toggle: {
    background({ isOn, disabled }) {
      if (disabled) return theme.color.element.inactive;
      if (isOn) return theme.color.brand.primary;

      return theme.color.element.primary;
    },
    borderColor({ isOn, disabled }) {
      if (disabled) return theme.color.element.tertiary;
      if (isOn) return theme.color.brand.primary;

      return theme.color.element.tertiary;
    },
  },
  bullet: {
    background({ isOn, disabled }) {
      if (disabled) return theme.color.element.tertiary;
      if (isOn) return theme.color.text.white;

      return theme.color.element.secondary;
    },
  },
};

export const ToggleContainer = styled(FormElementWrapper)`
  display: flex;
  margin-right: ${theme.space.m};
`;

export const StyledToggle = styled('button')`
  position: relative;
  min-width: 3.375rem /* 54px */;
  height: 1.25rem /* 20px */;
  background-color: ${styles.toggle.background};
  border: 1px solid ${styles.toggle.borderColor};
  border-radius: 10px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  transition: all 0.3s;
  --Toggle-bullet-f-space--for-label: 1.125rem /* 18px */;
  --Toggle-bullet-space: 0.25rem /* 4px */;

  &:hover {
    border-color: ${theme.color.element.secondary};
  }
`;

export const ToggleBullet = styled('span')`
  --Toggle-bullet-size: 0.875rem /* 14px */;

  position: absolute;
  height: var(--Toggle-bullet-size);
  width: var(--Toggle-bullet-size);
  background-color: ${styles.bullet.background};
  border-radius: 8px;
  top: 2px;
  transition: all 0.3s;
  left: ${({ isOn }) => (isOn ? '100%' : '2px')};
  margin-left: ${({ isOn }) => isOn && '-16px'};
`;

export const ToggleBulletLabel = styled('span')`
  text-transform: uppercase;
  text-align: center;
  font-size: ${theme.fontSize.xs};
  line-height: ${theme.lineHeight.s};
  position: absolute;
  top: 2px;
  bottom: 2px;
  transition: visibility 0.1s linear;
  color: ${({ disabled }) => disabled && theme.color.element.tertiary};
`;

export const ToggleBulletLabelOff = styled(ToggleBulletLabel)`
  left: var(--Toggle-bullet-f-space--for-label);
  right: var(--Toggle-bullet-space);
  color: ${({ disabled }) =>
    disabled ? theme.color.element.tertiary : theme.color.text.secondary};
  visibility: ${({ isOn }) => (isOn ? 'hidden' : 'visible')};
  transition-delay: 0.1s;
  transition: visibility ${({ isOn }) => (isOn ? '0.1s' : '0.3s')} linear;
`;

export const ToggleBulletLabelOn = styled(ToggleBulletLabel)`
  right: var(--Toggle-bullet-f-space--for-label);
  left: var(--Toggle-bullet-space);
  color: ${({ disabled }) =>
    disabled ? theme.color.element.tertiary : theme.color.text.white};
  visibility: ${({ isOn }) => (isOn ? 'visible' : 'hidden')};
`;

export const ToggleLabels = styled('span')`
  margin-left: ${theme.space.l};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
`;
