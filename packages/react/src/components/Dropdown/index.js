import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactSelect from 'react-select';
import Icon from '../Icon';
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

const buildCustomOption = onChange => ({ data, innerProps }) => {
  return {
    ...data.labelComponent,
    props: {
      ...data.labelComponent.props,
      ...innerProps,
      onClick: e => {
        innerProps.onClick(e);
        safeInvoke(onChange(data.value));
      },
    },
  };
};

const parseListItemObjectsIntoOptionObjects = objects =>
  [].concat(objects).map(object => ({
    label: object.props.children,
    value: object.props.children,
    labelComponent: object,
  }));

const Dropdown = ({
  className,
  disabled: isDisabled,
  id,
  onChange,
  children,
  ...props
}) => {
  const classes = {
    'is-disabled': isDisabled,
  };

  return (
    <div className={cx('FormEl-wrapper Select-wrapper', { ...classes })}>
      <ReactSelect
        options={parseListItemObjectsIntoOptionObjects(children)}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          Option: buildCustomOption(onChange),
        }}
        className={cx(
          'FormEl',
          'FormEl--withIcon',
          'Select',
          'Dropdown',
          className,
          {
            ...classes,
          },
        )}
        styles={customStyles}
        classNamePrefix='FlamingoDropdown'
        {...props}
      />
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  className: undefined,
  disabled: false,
};

export default Dropdown;
