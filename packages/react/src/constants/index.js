import PropTypes from "prop-types";
import * as ICONS_SVGS from "./icons";

export const CARD_ELEVATIONS = [0, 1, 2];

export const CARD_SIZES = {
  S: "s",
  M: "m",
};

export const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

export const ICON_SIZES = {
  S: "s",
  M: "m",
  L: "l",
};

export { ICONS_SVGS };

export const ICONS = Object.keys(ICONS_SVGS).reduce(
  (icons, icon) => ({
    ...icons,
    [icon]: icon,
  }),
  {}
);

export const INPUT_TYPES = {
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TEL: "tel",
  TEXT: "text",
};

export const INTENTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
};

export const INLINE_ALERT_TYPES = {
  INFORMATION: "information",
  SUCCESS: "success",
  ERROR: "error",
};

export const LIST_ITEM_SIZES = {
  NORMAL: "normal",
  SUB: "sub",
  MINI: "mini",
};

export const LIST_ITEM_VALUES_TYPES = {
  DARK: "dark",
  SUB_DARK: "subDark",
  ERROR: "error",
  SUCCESS: "success",
};

export const UI_TYPES = {
  Heading1: "Heading1",
  Heading2: "Heading2",
  Heading3: "Heading3",
  Heading4: "Heading4",
  Heading5: "Heading5",
  Heading6: "Heading6",
  Content: "Content",
  ContentBold: "ContentBold",
  SubContent: "SubContent",
  SubContentBold: "SubContentBold",
};

export const POPOVER_PLACEMENTS = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

export const refShapes = [
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
];
