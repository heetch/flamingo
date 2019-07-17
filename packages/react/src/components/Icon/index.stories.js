import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";

import { ICONS, ICON_SIZES } from "../../constants";
import Icon from ".";

const icons = Object.keys(ICONS);
const sizes = Object.values(ICON_SIZES);

const stories = storiesOf("Icon", module);

stories.addDecorator(withKnobs);

stories.add("All", () => (
  <div style={{ padding: "var(--space-xl)" }}>
    {icons.map(icon => (
      <div style={{ padding: "var(--space-s)", display: "inline-block" }}>
        <Icon key={`Icon--${icon}`} icon={icon} />
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
