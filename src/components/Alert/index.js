import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import UiText from '../UiText';
import { theme } from '../../theme';
import { StyledAlert, CloseButton, StyledText } from './styles';

const TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

const types = Object.values(TYPES);

const Alert = React.forwardRef(
  ({ title, children, type, onClose, ...props }, ref) => (
    <StyledAlert isClosable={!!onClose} ref={ref} alertType={type} {...props}>
      <UiText
        variant={UiText.VARIANTS.contentBold}
        as='h1'
        className='f-Alert-title'
        margin={0}
        style={{ marginRight: theme.space.xxl }}
      >
        {title}
      </UiText>

      <StyledText className='f-Alert-content' alertType={type}>
        {children}
      </StyledText>

      {onClose && (
        <CloseButton
          alertType={type}
          icon={Icon.ICONS.IconCross}
          className='f-Alert-closeBtn'
          size={Icon.SIZES.M}
          onClick={onClose}
        />
      )}
    </StyledAlert>
  ),
);

Alert.displayName = 'Alert';

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /** Method that is triggered when X button on the alert is clicked. Most likely to be used for hiding the alert. If not provided, no X button is gonna be shown. */
  onClose: PropTypes.func,
  title: PropTypes.node,
  type: PropTypes.oneOf(types),
};

Alert.defaultProps = {
  type: TYPES.INFORMATION,
};

Alert.TYPES = TYPES;

export default Alert;
