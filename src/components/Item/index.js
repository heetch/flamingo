import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import Icon from '../Icon';
import UiText from '../UiText';
import { StyledItem, ContentContainer, ValueContainer } from './styles';

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
      contentIcon,
      children,
      value,
      valueIcon,
      onClick,
      invalid,
      valid,
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
      <StyledItem
        {...containerProps}
        invalid={invalid}
        valid={valid}
        size={size}
        hasAction={!!onClick}
        className={cx('f-Item', className)}
        ref={ref}
      >
        <ContentContainer className='f-Item-contentContainer'>
          {contentIcon && <Icon icon={contentIcon} size={Icon.SIZES.L} />}

          <UiText
            as='div'
            className='f-Item-content'
            variant={
              isMini ? UiText.VARIANTS.subContent : UiText.VARIANTS.content
            }
            margin={0}
          >
            {children}
            {helper && <Helper>{helper}</Helper>}
          </UiText>
        </ContentContainer>

        <ValueContainer
          className='f-Item-valueContainer'
          invalid={invalid}
          valid={valid}
        >
          {value && (
            <UiText
              as={'div'}
              variant={UiText.VARIANTS.contentBold}
              className='f-Item-value'
              margin={0}
            >
              {value}
            </UiText>
          )}

          {valueIcon && <Icon icon={valueIcon} />}
        </ValueContainer>
      </StyledItem>
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
  size: SIZES.NORMAL,
  valueIcon: Icon.ICONS.IconArrowRight,
};

Item.SIZES = SIZES;

export default Item;
