import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Toggle from "./";

storiesOf("Buttons/Toggle", module)
  .addDecorator(withKnobs)
  .addDecorator(storiesFn => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {storiesFn()}
    </div>
  ))
  .add(
    "Playground",
    withInfo("")(() => (
      <Toggle
        disabled={boolean("Is disabled?", false)}
        label={text("Label", "Toggle label")}
        helper={text("Label helper", "Label helper")}
        onChange={action(`onChange`)}
      />
    ))
  )
  .add("All states", () => (
    <>
      <div style={{ width: "100%" }}>
        <Toggle label="Toggle" helper="Normal" />
      </div>
      <div style={{ width: "100%" }}>
        <Toggle checked label="Toggle" helper="On" />
      </div>
      <div style={{ width: "100%" }}>
        <Toggle disabled label="Toggle" helper="Disabled" />
      </div>
      <div style={{ width: "100%" }}>
        <Toggle disabled checked label="Toggle" helper="On & Disabled" />
      </div>
    </>
  ));
