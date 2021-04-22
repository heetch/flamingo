import React from 'react';
import PropTypes from 'prop-types';
import { RoundedBadge } from './styles';

const Badge = React.forwardRef((props, ref) => {
  return (
    <RoundedBadge {...props} ref={ref}>
      {props.children}
    </RoundedBadge>
  );
});

Badge.displayName = 'Badge';

Badge.propTypes = {
  children: PropTypes.node,
};

export default Badge;
