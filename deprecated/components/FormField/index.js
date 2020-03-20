import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import Label from '../Label';

const FormField = React.forwardRef(
  ({ className, children, helper, id, label }, ref) => (
    <div className={cx('f-FormField', className)} ref={ref}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {helper && <Helper>{helper}</Helper>}
    </div>
  ),
);

FormField.displayName = 'FormField';

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  helper: PropTypes.node,
  label: PropTypes.node,
  id: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  className: undefined,
  helper: undefined,
  label: undefined,
};

export default FormField;
