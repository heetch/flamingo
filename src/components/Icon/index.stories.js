import React from "react";
import { storiesOf } from "@storybook/react";

import { ICONS, ICON_SIZES } from "../../constants/";
import Icon from "./";

const icons = Object.keys(ICONS);
const sizes = Object.values(ICON_SIZES);

const stories = storiesOf("Icon", module);

stories.add("All", () =>
  icons.map(icon => <Icon key={`Icon--${icon}`} icon={icon} />)
);

stories.add("Custom color", () => (
  <Icon icon={icons[0]} style={{ color: "var(--color-rose2)" }} />
));

stories.add("Custom size", () =>
  sizes.map(size => <Icon key={`Icon--${size}`} icon={icons[0]} size={size} />)
);

icons.map(icon => stories.add(icon, () => <Icon icon={icon} />));
