import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactSelect from 'react-select';
import Icon from '../Icon';
import UiText from '../UiText';
import { safeInvoke } from '../../utils';
import { ICONS, ICON_SIZES } from '../../constants';

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
    icon={ICONS.IconChevronDown}
    className='FormEl-icon'
    size={ICON_SIZES.L}
  />
);

const CustomSingleValue = ({ children, ...props }) => {
  return (
    <UiText as='span' type={UiText.TYPES.content} {...props}>
      {children}
    </UiText>
  );
};

const buildCustomOption = onChange => ({ data, innerProps }) => {
  return {
    ...data.labelComponent,
    props: {
      ...data.labelComponent.props,
      ...innerProps,
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

const Dropdown = ({ className, onChange, children, placeholder, ...props }) => (
  <div className='FormEl-wrapper Select-wrapper'>
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
        'FormEl',
        'FormEl--withIcon',
        'Select',
        'Dropdown',
        className,
      )}
      styles={customStyles}
      classNamePrefix='FlamingoDropdown'
      {...props}
    />
  </div>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  className: undefined,
};

export default Dropdown;
