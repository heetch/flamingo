import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FormElementWrapper from '../FormComponents/FormElementWrapper';
import { StyledSelector, SelectorItem } from './styles';

const Selector = React.forwardRef(
  (
    { id, onChange, options, defaultIndex, isValid, isInvalid, ...props },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleOptionClick = (index, option) => {
      if (props.disabled || option.disabled) return;
      if (index === activeIndex) {
        setActiveIndex(null);
        onChange(null);
        return;
      }

      setActiveIndex(index);
      onChange(option.value);
    };

    return (
      <FormElementWrapper valid={isValid} invalid={isInvalid}>
        <StyledSelector
          as='div'
          id={id}
          name={id}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {options.map((option, index) => (
            <SelectorItem
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
              isActive={activeIndex === index}
              isDisabled={props.disabled || option.disabled === true}
              tabIndex={0}
              isValid={isValid}
              isInvalid={isInvalid}
            >
              {option.label}
            </SelectorItem>
          ))}
        </StyledSelector>
      </FormElementWrapper>
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
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    }),
  ),
};

Selector.defaultProps = {
  options: [],
};

export default Selector;
