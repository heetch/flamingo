import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import UI from "../UI";

import {
  ICONS,
  LIST_ITEM_SIZES,
  LIST_ITEM_VALUES_TYPES,
} from "../../constants";

const ICONS_KEYS = Object.keys(ICONS);

const ListItem = ({
  children,
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
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={({ which }) => (which === 13 ? onClick() : undefined)}
    className={cx("ListItem", {
      "ListItem--sub": type === LIST_ITEM_SIZES.SUB,
      "ListItem--mini": type === LIST_ITEM_SIZES.MINI,
      "is-clickable": !!onClick,
      "has-divider": !hideDivider,
    })}
  >
    {leftIcon && (
      <div className="ListItem-leftIcon">
        <Icon icon={leftIcon} />
      </div>
    )}

    <div>
      <UI
        type={
          type === LIST_ITEM_SIZES.MINI ? UI.TYPES.SubContent : UI.TYPES.Content
        }
        className={cx("ListItem-title", {
          "ListItem-subtitle": type === LIST_ITEM_SIZES.MINI,
        })}
      >
        {children}
      </UI>

      {subtitle && (
        <UI
          type={LIST_ITEM_SIZES.MINI ? UI.TYPES.SubContent : UI.TYPES.Content}
          className="ListItem-subtitle"
        >
          {subtitle}
        </UI>
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
      <UI
        className={cx({
          "ListItem-title": type !== LIST_ITEM_SIZES.MINI,
          "ListItem-subtitle": type === LIST_ITEM_SIZES.MINI,
        })}
      >
        {value}
      </UI>

      {(mockRightIcon || onClick || rightIcon) && (
        <span
          className={cx("ListItem-itemIcon", {
            "is-mini": type === LIST_ITEM_SIZES.MINI,
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

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subtitle: PropTypes.string,
  /** Defines type and size of an item */
  type: PropTypes.oneOf(LIST_ITEM_SIZES),
  valueType: PropTypes.oneOf(LIST_ITEM_VALUES_TYPES),
  value: PropTypes.string,
  leftIcon: PropTypes.oneOf(ICONS_KEYS),
  /** If `onClick` is set, default icon is Arrow Right */
  rightIcon: PropTypes.oneOf(ICONS_KEYS),
  /** If no icon is selected, this can be selected to display "empty icon" */
  mockRightIcon: PropTypes.bool,
  /** Should be set to `true` for last item in group */
  hideDivider: PropTypes.bool,
  strongValue: PropTypes.bool,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
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
