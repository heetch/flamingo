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

const InlineAlert = ({ title, children, type, onClose }) => (
  <div
    className={cx("InlineAlert", `InlineAlert--${type}`, {
      "is-closeable": !!onClose,
    })}
  >
    {onClose && (
      <span className="InlineAlert-iconClose" onClick={onClose}>
        <Icon icon={ICONS.IconClose} />
      </span>
    )}
    <div className="InlineAlert-icon">
      <Icon icon={ALERT_ICONS[type]} />
    </div>
    <div>
      <div className="InlineAlert-title">{title}</div>
      {children}
    </div>
  </div>
);

InlineAlert.propTypes = {
  /** Type of alert */
  type: PropTypes.oneOf(ALERT_TYPES),
  /** Title of alert */
  title: PropTypes.string.isRequired,
  /** Method that is triggered when X button on the alert is clicked. Most likely to be used for hiding the alert. If not provided, no X button is gonna be shown. */
  onClose: PropTypes.func.isRequired,
};

InlineAlert.defaultProps = {
  type: INLINE_ALERT_TYPES.INFORMATION,
};

export default InlineAlert;
