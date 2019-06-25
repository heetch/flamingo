import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Icon } from "..";
import { INLINE_ALERT_TYPES, ICONS } from "../../constants/";

const ALERT_ICONS = {
  [INLINE_ALERT_TYPES.INFORMATION]: ICONS.IconInfo,
  [INLINE_ALERT_TYPES.SUCCESS]: ICONS.IconCheck,
  [INLINE_ALERT_TYPES.ERROR]: ICONS.IconStop,
};

const ALERT_TYPES = Object.values(INLINE_ALERT_TYPES);

const InlineAlert = ({
  className,
  title,
  message,
  type,
  onClose,
  ...props
}) => (
  <div
    className={cx("InlineAlert", type, {
      [className]: className,
    })}
    {...props}
  >
    <span className="iconClose" onClick={onClose}>
      <Icon icon={ICONS.IconClose} />
    </span>
    <div className="icon">
      <Icon icon={ALERT_ICONS[type]} />
    </div>
    <div>
      <div className="title">{title}</div>
      <div className="message">{message}</div>
    </div>
  </div>
);

InlineAlert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(ALERT_TYPES),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

InlineAlert.defaultProps = {
  className: undefined,
  type: INLINE_ALERT_TYPES.INFORMATION,
};

export default InlineAlert;
