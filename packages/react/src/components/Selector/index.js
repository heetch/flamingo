import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div className='f-FormEl-wrapper'>
        <UiText
          as='div'
          variant={UiText.VARIANTS.content}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {options.map(({ label, value }) => (
              <div>{label}: {value}</div>
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
