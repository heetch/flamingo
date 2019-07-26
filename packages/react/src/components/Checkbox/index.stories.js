import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import Checkbox from ".";

storiesOf("Form controls/Checkbox", module)
  .addDecorator(withKnobs)
  .addDecorator(storiesFn => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {storiesFn()}
    </div>
  ))
  .add("Playground", () => (
    <>
      <Checkbox
        isUndefined={boolean("Is undefined?", false)}
        disabled={boolean("Is disabled?", false)}
        sublabel={text("Sub label", "Sublabel")}
      >
        {text("Label", "Checkbox label")}
      </Checkbox>
    </>
  ));
