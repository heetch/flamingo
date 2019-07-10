import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Icon } from "..";
import {
  ICONS,
  LIST_ITEM_SIZES,
  LIST_ITEM_VALUES_TYPES,
} from "../../constants/";

const ICONS_KEYS = Object.keys(ICONS);

const ListItem = ({
  children,
  subtitle,
  type,
  valueType,
  value,
  leftIcon,
  rightIcon,
  hideDivider,
  strongValue,
  onClick,
}) => (
  <div
    onClick={onClick}
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
      <div
        className={cx({
          "ListItem-title": type !== LIST_ITEM_SIZES.MINI,
          "ListItem-subtitle": type === LIST_ITEM_SIZES.MINI,
        })}
      >
        {children}
      </div>
      {subtitle && <div className="ListItem-subtitle">{subtitle}</div>}
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
      <span
        className={cx({
          "ListItem-title": type !== LIST_ITEM_SIZES.MINI,
          "ListItem-subtitle": type === LIST_ITEM_SIZES.MINI,
        })}
      >
        {value}
      </span>
      <span
        className={cx("ListItem-itemIcon", {
          "is-mini": type === LIST_ITEM_SIZES.MINI,
        })}
      >
        {(onClick || rightIcon) && (
          <Icon icon={rightIcon || ICONS.IconArrowRight} />
        )}
      </span>
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
  hideDivider: false,
  strongValue: false,
  onClick: undefined,
};

export default ListItem;
