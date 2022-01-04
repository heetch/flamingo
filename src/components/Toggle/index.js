import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import {
  StyledToggle,
  ToggleBullet,
  ToggleBulletLabelOff,
  ToggleBulletLabelOn,
  ToggleContainer,
  ToggleLabels,
} from './styles';

const Toggle = React.forwardRef(
  (
    { children, className, checked, disabled, helper, onChange, ...props },
    ref,
  ) => {
    const [isOn, setIsOn] = useState(checked);

    useEffect(() => {
      setIsOn(checked);
    }, [checked]);

    const handleToggle = () => {
      if (disabled) {
        return;
      }

      setIsOn(!isOn);
      onChange(!isOn);
    };

    const labelProps = {
      onClick: handleToggle,
      onKeyPress: ({ which }) => (which === 13 ? handleToggle : undefined),
    };

    return (
      <ToggleContainer
        className={cx('f-ToggleContainer', className)}
        ref={ref}
        {...props}
      >
        <StyledToggle
          className='f-Toggle'
          {...labelProps}
          disabled={disabled}
          isOn={isOn}
          type='button'
        >
          <ToggleBullet
            className='f-Toggle-bullet'
            disabled={disabled}
            isOn={isOn}
          />
          <ToggleBulletLabelOn
            className='f-Toggle-bullet-label f-Toggle-bullet-label--on'
            disabled={disabled}
            isOn={isOn}
          >
            ON
          </ToggleBulletLabelOn>
          <ToggleBulletLabelOff
            className='f-Toggle-bullet-label f-Toggle-bullet-label--off'
            disabled={disabled}
            isOn={isOn}
          >
            OFF
          </ToggleBulletLabelOff>
        </StyledToggle>

        {(children || helper) && (
          <ToggleLabels
            className='f-Toggle-labels'
            {...labelProps}
            disabled={disabled}
          >
            {children}
            {helper && <Helper>{helper}</Helper>}
          </ToggleLabels>
        )}
      </ToggleContainer>
    );
  },
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helper: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
