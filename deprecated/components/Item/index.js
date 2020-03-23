import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import Icon from '../Icon';
import UiText from '../UiText';

const SIZES = {
  NORMAL: 'normal',
  SUB: 'sub',
  MINI: 'mini',
};

const icons = Object.values(Icon.ICONS);
const sizes = Object.values(SIZES);

const Item = React.forwardRef(
  (
    {
      className,
      helper,
      size,
      invalid,
      valid,
      contentIcon,
      children,
      value,
      valueIcon,
      onClick,
    },
    ref,
  ) => {
    const isMini = size === SIZES.MINI;

    const containerProps = onClick && {
      onClick,
      onKeyPress: ({ which }) => (which === 13 ? onClick() : undefined),
      role: 'button',
      tabIndex: 0,
    };

    return (
      <div
        {...containerProps}
        className={cx('f-Item', `f-Item--${size}`, className, {
          'is-invalid': invalid,
          'is-valid': valid,
          'has-action': onClick,
        })}
        ref={ref}
      >
        <div className='f-Item-contentContainer'>
          {contentIcon && <Icon icon={contentIcon} size={Icon.SIZES.L} />}

          <UiText
            as='div'
            className='f-Item-content'
            variant={
              isMini ? UiText.VARIANTS.subContent : UiText.VARIANTS.content
            }
          >
            {children}
            {helper && <Helper>{helper}</Helper>}
          </UiText>
        </div>

        <div className='f-Item-valueContainer'>
          {value && (
            <UiText
              variant={UiText.VARIANTS.contentBold}
              className='f-Item-value'
            >
              {value}
            </UiText>
          )}

          {valueIcon && <Icon icon={valueIcon} />}
        </div>
      </div>
    );
  },
);

Item.displayName = 'Item';

Item.propTypes = {
  className: PropTypes.string,
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
  className: undefined,
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
