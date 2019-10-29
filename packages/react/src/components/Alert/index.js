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
    className={cx('Alert', `Alert--${type}`, {
      'is-closeable': onClose,
    })}
    ref={ref}
  >
    <div className='Alert-icon'>
      <Icon icon={icons[type]} />
    </div>

    <UiText type={UiText.TYPES.contentBold} as='h1' className='Alert-title'>
      {title}
    </UiText>

    <Text className='Alert-content'>{children}</Text>

    {onClose && (
      <IconButton
        icon={Icon.ICONS.IconCross}
        intent={Button.INTENTS.SECONDARY}
        variant={Button.VARIANTS.MINIMAL}
        className='Alert-closeBtn'
        size={Icon.SIZES.S}
        onClick={() => safeInvoke(onClose)}
      />
    )}
  </div>
));

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
