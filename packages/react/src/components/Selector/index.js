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
      invalid: isInvalid,
      onChange,
      options,
      valid: isValid,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleOptionClick = (index, value) => {
      console.log('selected', index, value);
      setActiveIndex(index);
      onChange(value);
    };

    return (
      <div className='f-FormEl-wrapper'>
        <UiText
          as='div'
          variant={UiText.VARIANTS.content}
          className={cx('f-Selector', className)}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {options.map(({ label, value }, index) => (
            <div
              key={value}
              role='button'
              onClick={() => handleOptionClick(index, value)}
              onKeyPress={({ which }) =>
                which === 13 ? handleOptionClick(index, value) : undefined
              }
              className={cx('f-Selector-item', {
                'is-active': activeIndex === index,
              })}
              tabIndex={0}
            >
              {label}
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
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  valid: PropTypes.bool,
};

Selector.defaultProps = {
  className: undefined,
  disabled: false,
  invalid: false,
  options: [],
  valid: false,
};

export default Selector;
