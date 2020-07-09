import * as React from 'react';
import PropTypes from 'prop-types';

import Icon from '../_DeprecatedIcon';
import { State as Container } from './styles';

const State = ({ children, icon, ...props }) => (
  <Container {...props}>
    {icon && <Icon icon={icon} size={Icon.SIZES.L} />}
    {children}
  </Container>
);

State.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
};

export default State;
