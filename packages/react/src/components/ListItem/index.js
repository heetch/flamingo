import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Icon } from "..";
import { ICONS, LIST_ITEM_TYPES } from "../../constants/";

const ICONS_KEYS = Object.keys(ICONS);

const ListItem = ({
  active,
  children,
  subtitle,
  type,
  value,
  leftIcon,
  rightIcon,
  hideDivider,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cx("ListItem", {
      "ListItem--subitem": type === LIST_ITEM_TYPES.SUB,
      "ListItem--miniitem": type === LIST_ITEM_TYPES.MINI,
      "is-active": active,
      "is-clickable": !!onClick,
      "ListItem-divider": !hideDivider,
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
          "ListItem-title": type !== LIST_ITEM_TYPES.MINI,
          "ListItem-subtitle": type === LIST_ITEM_TYPES.MINI,
        })}
      >
        {children}
      </div>
      {subtitle && <div className="ListItem-subtitle">{subtitle}</div>}
    </div>
    <div className="ListItem-valueContainer">
      <span
        className={cx({
          "ListItem-title": type !== LIST_ITEM_TYPES.MINI,
          "ListItem-subtitle": type === LIST_ITEM_TYPES.MINI,
        })}
      >
        {value}
      </span>
      <span className="ListItem-itemIcon">
        {(onClick || rightIcon) && (
          <Icon icon={rightIcon || ICONS.IconArrowRight} />
        )}
      </span>
    </div>
  </div>
);

ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  /** Defines type and size of an item */
  type: PropTypes.oneOf(LIST_ITEM_TYPES),
  value: PropTypes.string,
  leftIcon: PropTypes.oneOf(ICONS_KEYS),
  /** If `onClick` is set, default icon is Arrow Right */
  rightIcon: PropTypes.oneOf(ICONS_KEYS),
  /** Should be set to `true` for last item in group */
  hideDivider: PropTypes.bool,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  active: false,
  subtitle: undefined,
  type: LIST_ITEM_TYPES.NORMAL,
  value: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  hideDivider: false,
  onClick: undefined,
};

export default ListItem;
