import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Tabs from "./";

storiesOf("Navigation")
  .addDecorator(withKnobs)
  .add(
    "Tabs",
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
