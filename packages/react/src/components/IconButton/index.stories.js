import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";

import { ICONS } from "../../constants";
import IconButton from ".";

const states = ["default", "hover", "active", "disabled"];
const icon = "IconCheck";

const stories = storiesOf("Buttons/IconButton", module);

stories.add("With states", () =>
  states.map(state => (
    <div key={state} style={{ padding: "var(--space-s)" }}>
      <IconButton
        className={`is-${state}`}
        disabled={state === "disabled"}
        icon={icon}
      />
    </div>
  ))
);

stories.add("Playground", () => (
  <IconButton
    disabled={boolean("Disabled", false)}
    icon={select("Icon", ICONS, icon)}
  />
));
