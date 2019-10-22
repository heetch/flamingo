import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import Icon from '../Icon';
import UiText from '../UiText';

import { safeInvoke } from '../../utils';
import { refShapes } from '../../constants';

const SIZES = {
  NORMAL: 'normal',
  SUB: 'sub',
  MINI: 'mini',
};

const icons = Object.values(Icon.ICONS);
const sizes = Object.values(SIZES);

const Item = ({
  forwardedRef,
  helper,
  size,
  invalid,
  valid,
  contentIcon,
  children,
  value,
  valueIcon,
  onClick,
}) => {
  const isMini = size === SIZES.MINI;

  const containerProps = onClick && {
    onClick: safeInvoke(onClick),
    onKeyPress: ({ which }) => (which === 13 ? safeInvoke(onClick) : undefined),
    role: 'button',
    tabIndex: 0,
  };

  return (
    <div
      {...containerProps}
      className={cx('Item', `Item--${size}`, {
        'is-invalid': invalid,
        'is-valid': valid,
        'has-action': onClick,
      })}
      ref={forwardedRef}
    >
      <div className='Item-contentContainer'>
        {contentIcon && <Icon icon={contentIcon} size={Icon.SIZES.L} />}

        <UiText
          type={isMini ? UiText.TYPES.subContent : UiText.TYPES.content}
          className='Item-content'
        >
          {children}
          {helper && <Helper>{helper}</Helper>}
        </UiText>
      </div>

      <div className='Item-valueContainer'>
        {value && (
          <UiText type={UiText.TYPES.contentBold} className='Item-value'>
            {value}
          </UiText>
        )}

        {valueIcon && <Icon icon={valueIcon} />}
      </div>
    </div>
  );
};

Item.propTypes = {
  forwardedRef: PropTypes.oneOfType(refShapes),
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  contentIcon: PropTypes.oneOf(icons),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  helper: PropTypes.node,
  value: PropTypes.string,
  valueIcon: PropTypes.oneOf(icons),
  onClick: PropTypes.func,
};

Item.defaultProps = {
  forwardedRef: undefined,
  invalid: false,
  valid: false,
  size: SIZES.NORMAL,
  contentIcon: undefined,
  helper: undefined,
  value: undefined,
  valueIcon: Icon.ICONS.IconArrowRight,
  onClick: undefined,
};

Item.SIZES = SIZES;

export default Item;