import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Checkbox from ".";

storiesOf("Form controls/Checkbox", module)
  .addDecorator(storiesFn => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {storiesFn()}
    </div>
  ))
  .add(
    "Playground",
    withInfo("")(() => () => (
      <Checkbox
        isUndefined={boolean("Is undefined?", false)}
        disabled={boolean("Is disabled?", false)}
        helper={text("Label helper", "Label helper")}
      >
        {text("Label", "Checkbox label")}
      </Checkbox>
    ))
  );
