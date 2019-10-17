import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { safeInvoke } from '../../utils';

import UiText from '../UiText';

const Checkbox = ({
  isUndefined,
  disabled,
  children,
  checked: isDefaultChecked,
  helper,
  name,
  value,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(isDefaultChecked);

  const onCheckboxStateChange = e => {
    const { checked } = e.target;
    setIsChecked(checked);
    safeInvoke(onChange, e);
  };

  const checkbox = (
    <input
      checked={isChecked}
      disabled={disabled}
      className={cx('Checkbox', { 'is-undefined': !isChecked && isUndefined })}
      type='checkbox'
      name={name}
      value={value}
      onChange={onCheckboxStateChange}
    />
  );

  if (!children) {
    return checkbox;
  }

  return (
    <UiText as='label' className='Checkbox-label' type={UiText.TYPES.content}>
      {checkbox}
      <div>
        {children}
        {helper && (
          <UiText
            type={UiText.TYPES.subContent}
            as='span'
            className='Checkbox-helper'
          >
            {helper}
          </UiText>
        )}
      </div>
    </UiText>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  isUndefined: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  helper: PropTypes.string,
};

Checkbox.defaultProps = {
  isUndefined: false,
  checked: false,
  disabled: false,
  children: undefined,
  value: 'checked',
  helper: undefined,
};

export default Checkbox;
