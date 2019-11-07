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
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: provided => ({
    ...provided,
    marginRight: '1rem',
    padding: 0,
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
    marginLeft: '1rem',
    minHeight: 38,
  }),
};

const CustomDropdownIndicator = ({ innerRef, innerProps }) => (
  <Icon
    ref={innerRef}
    {...innerProps}
    icon={Icon.ICONS.IconChevronUpDown}
    className='f-FormEl-icon'
    size={Icon.SIZES.L}
  />
);

const CustomSingleValue = ({ children }) => (
  <UiText as='span' type={UiText.VARIANTS.content}>
    {children}
  </UiText>
);

const buildCustomOption = (onChange, isSelectable) => ({
  data,
  innerProps,
  isFocused,
  setValue,
}) => ({
  ...data.labelComponent,
  props: {
    ...innerProps,
    ...data.labelComponent.props,
    focused: isFocused,
    onClick: e => {
      safeInvoke(onChange, data.value);
      safeInvoke(data.labelComponent.props.onClick, e);
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
      <div className='f-FormEl-wrapper f-Select-wrapper'>
        <ReactSelect
          placeholder={placeholder}
          options={parseListItemObjectsIntoOptionObjects(children)}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
            Option: buildCustomOption(onChange, isSelectable),
            Placeholder: CustomSingleValue,
            SingleValue: CustomSingleValue,
          }}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={cx(
            'f-FormEl',
            'f-FormEl--withIcon',
            'f-Select',
            'f-Dropdown',
            className,
            { 'is-focus': hasFocus },
          )}
          isSearchable={false}
          styles={customStyles}
          classNamePrefix='FlamingoDropdown'
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
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  isSelectable: false,
  className: undefined,
};

export default Dropdown;
