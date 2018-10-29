import React from "react";
import { storiesOf } from "@storybook/react";

import { ICONS } from "../../constants/";
import Icon from "./";

const icons = Object.keys(ICONS);

const stories = storiesOf("Icon", module);

stories.add("All", () => icons.map(icon => <Icon key={icon} icon={icon} />));

stories.add("Custom color", () => (
  <Icon icon={icons[0]} style={{ color: "var(--color-rose2)" }} />
));

icons.map(icon => stories.add(icon, () => <Icon icon={icon} />));
