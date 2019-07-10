import * as ICONS_SVGS from "./icons";

export const HEADING_LEVELS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

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
