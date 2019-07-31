import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";

import Helper from "../Helper";
import Icon from ".";

import { ICONS, ICON_SIZES } from "../../constants";

const icons = Object.keys(ICONS);
const sizes = Object.values(ICON_SIZES);

const stories = storiesOf("Icons", module);

stories.addDecorator(withKnobs);

stories.add("All", () => (
  <div
    style={{ display: "flex", flexWrap: "wrap", padding: "var(--space-xl)" }}
  >
    {icons.map(icon => (
      <div
        key={icon}
        style={{ padding: "var(--space-s)", width: 150, textAlign: "center" }}
      >
        <Icon key={`Icon--${icon}`} icon={icon} />
        <Helper>{icon}</Helper>
      </div>
    ))}
  </div>
));

stories.add("Playground", () => (
  <Icon
    icon={select("Icon", icons, ICONS.IconAlertOctagon)}
    size={select("Size", sizes, ICON_SIZES.M)}
  />
));
