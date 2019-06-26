import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Tabulation from "./";

storiesOf("Navigation")
  .addDecorator(withKnobs)
  .add(
    "Tabulation",
    withInfo("")(() => (
      <Tabulation
        elements={array("Tabs (separated by comma)", [
          "Cars",
          "Drivers",
          "Rides",
        ])}
      />
    ))
  );
