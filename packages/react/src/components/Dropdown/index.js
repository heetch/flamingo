import React from 'react';
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

const buildCustomOption = onChange => ({ data, innerProps }) => {
  return {
    ...data.labelComponent,
    props: {
      ...innerProps,
      ...data.labelComponent.props,
      onClick: e => {
        innerProps.onClick(e);
        safeInvoke(onChange(data.value));
        safeInvoke(data.labelComponent.props.onClick(e));
      },
    },
  };
};

const parseListItemObjectsIntoOptionObjects = objects =>
  [].concat(objects).map(object => ({
    label: object.props.children,
    value: object.props.optionValue || object.props.children,
    labelComponent: object,
  }));

const Dropdown = React.forwardRef(
  ({ className, onChange, children, placeholder, ...props }, ref) => (
    <div className='f-FormEl-wrapper f-Select-wrapper'>
      <ReactSelect
        placeholder={placeholder}
        options={parseListItemObjectsIntoOptionObjects(children)}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          Option: buildCustomOption(onChange),
          Placeholder: CustomSingleValue,
          SingleValue: CustomSingleValue,
        }}
        className={cx(
          'f-FormEl',
          'f-FormEl--withIcon',
          'f-Select',
          'f-Dropdown',
          className,
        )}
        isSearchable={false}
        styles={customStyles}
        classNamePrefix='FlamingoDropdown'
        ref={ref}
        {...props}
      />
    </div>
  ),
);

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  className: undefined,
};

export default Dropdown;
