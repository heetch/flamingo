import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import UiText from '../UiText';

const Radio = React.forwardRef(
  (
    { className, disabled, children, checked, helper, id, name, onChange },
    ref,
  ) => {
    const input = (
      <input
        defaultChecked={checked}
        disabled={disabled}
        className={cx('f-Radio', className)}
        type='radio'
        id={id}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    );

    if (!children) {
      return input;
    }

    return (
      <div className='f-FormEl-wrapper'>
        {input}
        <UiText as='label' htmlFor={id} variant={UiText.VARIANTS.content}>
          {children}
          {helper && <Helper>{helper}</Helper>}
        </UiText>
      </div>
    );
  },
);

Radio.displayName = 'Radio';

Radio.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

Radio.defaultProps = {
  className: undefined,
  checked: false,
  disabled: false,
  children: undefined,
  helper: undefined,
};

export default Radio;
