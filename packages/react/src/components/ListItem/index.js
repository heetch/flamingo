import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Icon } from "..";
import { ICONS } from "../../constants/";

const ListItem = ({
  active,
  title,
  subtitle,
  subitem,
  miniitem,
  value,
  leftIcon,
  rightIcon,
  hideDivider,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cx({
      ListItem: true,
      "ListItem--subitem": subitem && !miniitem,
      "ListItem--miniitem": miniitem,
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
      <div className="ListItem-title">{title}</div>
      {!!subtitle && <div className="ListItem-subtitle">{subtitle}</div>}
    </div>
    <div className="ListItem-valueContainer">
      <span>{value}</span>
      <span className="ListItem-itemIcon">
        {(onClick || rightIcon) && (
          <Icon icon={rightIcon || ICONS.IconArrowRight} />
        )}
      </span>
    </div>
  </div>
);

const ICONS_KEYS = Object.keys(ICONS);

ListItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subitem: PropTypes.bool,
  /** Overrides `subitem`, even if `subitem` is set to `true` */
  miniitem: PropTypes.bool,
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
  subitem: false,
  miniitem: false,
  value: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  hideDivider: false,
  onClick: undefined,
};

export default ListItem;
