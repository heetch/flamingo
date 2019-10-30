import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import UiText from '../UiText';
import Text from '../Text';

import { safeInvoke } from '../../utils';

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

const Alert = React.forwardRef(({ title, children, type, onClose }, ref) => (
  <div
    className={cx('f-Alert', `f-Alert--${type}`, {
      'is-closeable': onClose,
    })}
    ref={ref}
  >
    <div className='f-Alert-icon'>
      <Icon icon={icons[type]} />
    </div>

    <UiText
      variant={UiText.VARIANTS.contentBold}
      as='h1'
      className='f-Alert-title'
    >
      {title}
    </UiText>

    <Text className='f-Alert-content'>{children}</Text>

    {onClose && (
      <IconButton
        icon={Icon.ICONS.IconCross}
        intent={Button.INTENTS.SECONDARY}
        variant={Button.VARIANTS.MINIMAL}
        className='f-Alert-closeBtn'
        size={Icon.SIZES.S}
        onClick={() => safeInvoke(onClose)}
      />
    )}
  </div>
));

Alert.displayName = 'Alert';

Alert.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(types),
  title: PropTypes.string.isRequired,
  /** Method that is triggered when X button on the alert is clicked. Most likely to be used for hiding the alert. If not provided, no X button is gonna be shown. */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  children: undefined,
  onClose: undefined,
  type: TYPES.INFORMATION,
};

Alert.TYPES = TYPES;

export default Alert;
