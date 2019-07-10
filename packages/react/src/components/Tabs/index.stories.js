import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Tabs from "./";

storiesOf("Navigation/Tabs")
  .addDecorator(withKnobs)
  .add(
    "Playground",
    withInfo("")(() => (
      <Tabs
        elements={array("Tabs (separated by comma)", [
          "Cars",
          "Drivers",
          "Rides",
        ])}
      />
    ))
  );
