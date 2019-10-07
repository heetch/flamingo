import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import UiText from "../UiText";

import {
  ICONS,
  LIST_ITEM_SIZES,
  LIST_ITEM_VALUES_TYPES,
  refShapes,
} from "../../constants";

const icons = Object.values(ICONS);
const sizes = Object.values(LIST_ITEM_SIZES);
const types = Object.values(LIST_ITEM_VALUES_TYPES);

const ListItem = ({
  children,
  forwardedRef,
  subtitle,
  type,
  valueType,
  value,
  leftIcon,
  rightIcon,
  mockRightIcon,
  hideDivider,
  strongValue,
  onClick,
}) => {
  const isSub = type === LIST_ITEM_SIZES.SUB;
  const isMini = type === LIST_ITEM_SIZES.MINI;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={({ which }) => (which === 13 ? onClick() : undefined)}
      className={cx("ListItem", {
        "ListItem--sub": isSub,
        "ListItem--mini": isMini,
        "is-clickable": !!onClick,
        "has-divider": !hideDivider,
      })}
      ref={forwardedRef}
    >
      {leftIcon && (
        <div className="ListItem-leftIcon">
          <Icon icon={leftIcon} />
        </div>
      )}

      <div>
        <UiText
          type={isMini ? UiText.TYPES.subContent : UiText.TYPES.content}
          className={cx("ListItem-title", {
            "ListItem-subtitle": type === LIST_ITEM_SIZES.MINI,
          })}
        >
          {children}
        </UiText>

        {subtitle && (
          <UiText
            type={isMini ? UiText.TYPES.subContent : UiText.TYPES.content}
            className="ListItem-subtitle"
          >
            {subtitle}
          </UiText>
        )}
      </div>

      <div
        className={cx("ListItem-valueContainer", {
          "is-dark": valueType === LIST_ITEM_VALUES_TYPES.DARK,
          "is-sub-dark": valueType === LIST_ITEM_VALUES_TYPES.SUB_DARK,
          "is-error": valueType === LIST_ITEM_VALUES_TYPES.ERROR,
          "is-success": valueType === LIST_ITEM_VALUES_TYPES.SUCCESS,
          "is-strong-value": strongValue,
        })}
      >
        <UiText
          className={cx({
            "ListItem-title": !isMini,
            "ListItem-subtitle": isMini,
          })}
        >
          {value}
        </UiText>

        {(mockRightIcon || onClick || rightIcon) && (
          <span
            className={cx("ListItem-itemIcon", {
              "is-mini": isMini,
            })}
          >
            {(onClick || rightIcon) && (
              <Icon icon={rightIcon || ICONS.IconArrowRight} />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  forwardedRef: PropTypes.oneOfType(refShapes),
  subtitle: PropTypes.string,
  /** Defines type and size of an item */
  type: PropTypes.oneOf(sizes),
  valueType: PropTypes.oneOf(types),
  value: PropTypes.string,
  leftIcon: PropTypes.oneOf(icons),
  /** If `onClick` is set, default icon is Arrow Right */
  rightIcon: PropTypes.oneOf(icons),
  /** If no icon is selected, this can be selected to display "empty icon" */
  mockRightIcon: PropTypes.bool,
  /** Should be set to `true` for last item in group */
  hideDivider: PropTypes.bool,
  strongValue: PropTypes.bool,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  forwardedRef: undefined,
  subtitle: undefined,
  type: LIST_ITEM_SIZES.NORMAL,
  valueType: LIST_ITEM_VALUES_TYPES.DARK,
  value: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  mockRightIcon: false,
  hideDivider: false,
  strongValue: false,
  onClick: undefined,
};

export default ListItem;
