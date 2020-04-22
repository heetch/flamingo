import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import Selector from '../Selector';

const SelectorField = React.forwardRef(
  ({ label, helper, selectorRef, ...props }, ref) => (
    <FormField label={label} helper={helper} {...props} ref={ref}>
      <Selector ref={selectorRef} {...props} />
    </FormField>
  ),
);

SelectorField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  selectorRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

SelectorField.displayName = 'SelectorField';

export default SelectorField;
