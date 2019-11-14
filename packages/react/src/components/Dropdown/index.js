import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactSelect from 'react-select';
import Icon from '../Icon';
import UiText from '../UiText';
import { safeInvoke } from '../../utils';

const customStyles = {
  control: () => ({
    border: 0,
    backgroundColor: 'transparent',
    minHeight: 'initial',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
  indicatorContainer: styles => ({
    ...styles,
    marginRight: '1rem',
    padding: 0,
  }),
  valueContainer: styles => ({
    ...styles,
    padding: 0,
    marginLeft: '1rem',
    minHeight: 38,
  }),
};

const DropdownIndicator = ({ innerRef, innerProps }) => (
  <Icon
    ref={innerRef}
    {...innerProps}
    icon={Icon.ICONS.IconChevronUpDown}
    className='f-FormEl-icon'
    size={Icon.SIZES.L}
  />
);

const SingleValue = ({ children }) => (
  <UiText as='span' type={UiText.VARIANTS.content}>
    {children}
  </UiText>
);

const buildCustomOption = (onChange, isSelectable) => ({
  data: { labelComponent, value },
  innerProps,
  isFocused,
  setValue,
}) => ({
  ...labelComponent,
  props: {
    ...innerProps,
    ...labelComponent.props,
    focused: isFocused,
    onClick: e => {
      safeInvoke(onChange, value);
      safeInvoke(labelComponent.props.onClick, e);
      isSelectable ? innerProps.onClick(e) : setValue(null);
    },
  },
});

const parseListItemObjectsIntoOptionObjects = objects =>
  [].concat(objects).map(object => ({
    label: object.props.children,
    value: object.props.optionValue || object.props.children,
    labelComponent: object,
  }));

const Dropdown = React.forwardRef(
  (
    { className, onChange, children, placeholder, isSelectable, ...props },
    ref,
  ) => {
    const [hasFocus, setHasFocus] = useState(false);

    return (
      <div className='f-FormEl-wrapper'>
        <ReactSelect
          placeholder={placeholder}
          options={parseListItemObjectsIntoOptionObjects(children)}
          components={{
            DropdownIndicator,
            Option: buildCustomOption(onChange, isSelectable),
            Placeholder: SingleValue,
            SingleValue,
          }}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={cx(
            'f-FormEl',
            'f-FormEl--withIcon',
            'f-Dropdown',
            className,
            { 'is-focus': hasFocus },
          )}
          isSearchable={false}
          styles={customStyles}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  /** Make this true if you want this dropdown to behave like a select component */
  isSelectable: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  isSelectable: false,
  className: undefined,
};

export default Dropdown;
