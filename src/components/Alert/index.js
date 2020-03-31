import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import UiText from '../UiText';
import Text from '../Text';
import { StyledAlert, AlertIcon, CloseButton } from './styles';

const TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

const icons = {
  [TYPES.INFORMATION]: Icon.ICONS.IconInfo,
  [TYPES.SUCCESS]: Icon.ICONS.IconCheck,
  [TYPES.ERROR]: Icon.ICONS.IconAlertOctagon,
};

const types = Object.values(TYPES);

const Alert = React.forwardRef(
  ({ title, children, type, onClose, ...props }, ref) => (
    <StyledAlert isClosable={!!onClose} ref={ref} alertType={type} {...props}>
      <AlertIcon className='f-Alert-icon' alertType={type}>
        <Icon icon={icons[type]} />
      </AlertIcon>

      <UiText
        variant={UiText.VARIANTS.contentBold}
        as='h1'
        className='f-Alert-title'
        margin={0}
      >
        {title}
      </UiText>

      <Text className='f-Alert-content' margin={0}>
        {children}
      </Text>

      {onClose && (
        <CloseButton
          icon={Icon.ICONS.IconCross}
          intent={Button.INTENTS.SECONDARY}
          variant={Button.VARIANTS.MINIMAL}
          className='f-Alert-closeBtn'
          size={Icon.SIZES.S}
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
