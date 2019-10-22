import React from 'react';
import PropTypes from 'prop-types';

import Helper from '../Helper';
import UiText from '../UiText';

const Radio = ({
  disabled,
  children,
  checked,
  helper,
  name,
  value,
  onChange,
}) => {
  const input = (
    <input
      defaultChecked={checked}
      disabled={disabled}
      className='Radio'
      type='radio'
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  if (!children) {
    return input;
  }

  return (
    <div className='FormEl-wrapper'>
      {input}
      <UiText as='label' htmlFor={name} type={UiText.TYPES.content}>
        {children}
        {helper && <Helper>{helper}</Helper>}
      </UiText>
    </div>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  children: undefined,
  helper: undefined,
};

export default Radio;
