import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

import { INLINE_ALERT_TYPES, refShapes } from '../../constants';

const ALERT_ICONS = {
  [INLINE_ALERT_TYPES.INFORMATION]: Icon.ICONS.IconInfo,
  [INLINE_ALERT_TYPES.SUCCESS]: Icon.ICONS.IconCheck,
  [INLINE_ALERT_TYPES.ERROR]: Icon.ICONS.IconAlertOctagon,
};

const ALERT_TYPES = Object.values(INLINE_ALERT_TYPES);

const InlineAlert = ({ title, children, forwardedRef, type, onClose }) => (
  <div
    className={cx('InlineAlert', `InlineAlert--${type}`, {
      'is-closeable': onClose,
    })}
    ref={forwardedRef}
  >
    {onClose && (
      <button type='button' className='InlineAlert-iconClose' onClick={onClose}>
        <Icon icon={Icon.ICONS.IconCross} />
      </button>
    )}

    <div className='InlineAlert-icon'>
      <Icon icon={ALERT_ICONS[type]} />
    </div>

    <div>
      <UiText
        type={UiText.TYPES.contentBold}
        as='h1'
        className='InlineAlert-title'
      >
        {title}
      </UiText>
      <UiText type={UiText.TYPES.content} className='InlineAlert-content'>
        {children}
      </UiText>
    </div>
  </div>
);

InlineAlert.propTypes = {
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
  /** Type of alert */
  type: PropTypes.oneOf(ALERT_TYPES),
  /** Title of alert */
  title: PropTypes.string.isRequired,
  /** Method that is triggered when X button on the alert is clicked. Most likely to be used for hiding the alert. If not provided, no X button is gonna be shown. */
  onClose: PropTypes.func.isRequired,
};

InlineAlert.defaultProps = {
  children: undefined,
  forwardedRef: undefined,
  type: INLINE_ALERT_TYPES.INFORMATION,
};

export default InlineAlert;
