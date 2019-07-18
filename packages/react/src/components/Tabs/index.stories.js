import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Tabs from "./";

const WIDTH_DECORATOR = storiesFn => (
  <div style={{ maxWidth: "300px" }}>{storiesFn()}</div>
);

storiesOf("Navigation/Tabs")
  .addDecorator(withKnobs)
  .addDecorator(WIDTH_DECORATOR)
  .add(
    "Playground",
    withInfo("")(() => (
      <Tabs
        elements={array("Tabs (separated by comma)", [
          "Cars",
          "Drivers",
          "Rides",
          "Vehicles",
          "Discounts",
          "Promotions",
        ])}
      />
    ))
  );
