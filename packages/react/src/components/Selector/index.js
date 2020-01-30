import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import UiText from '../UiText';

const Selector = React.forwardRef(
  (
    {
      className,
      disabled: isDisabled,
      id,
      onChange,
      options,
      defaultIndex,
      isValid,
      isInvalid,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleOptionClick = (index, option) => {
      if (isDisabled || option.disabled) return;
      if (index === activeIndex) {
        setActiveIndex(null);
        onChange(null);
        return;
      }

      setActiveIndex(index);
      onChange(option.value);
    };

    const classes = {
      'is-disabled': isDisabled,
      'is-valid': isValid,
      'is-invalid': isInvalid,
    };

    return (
      <div className={cx('f-FormEl-wrapper', { ...classes })}>
        <UiText
          as='div'
          className={cx('f-Selector', className, { ...classes })}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role='button'
              onClick={() => handleOptionClick(index, option)}
              onKeyPress={({ which }) =>
                which === 13 ? handleOptionClick(index, option) : undefined
              }
              className={cx('f-Selector-item', {
                'is-active': activeIndex === index,
                'is-disabled': option.disabled === true,
              })}
              tabIndex={0}
            >
              {option.label}
            </div>
          ))}
        </UiText>
      </div>
    );
  },
);

Selector.displayName = 'Selector';

Selector.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultIndex: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
};

Selector.defaultProps = {
  className: undefined,
  disabled: false,
  isValid: false,
  isInvalid: false,
  defaultIndex: null,
  options: [],
};

export default Selector;
