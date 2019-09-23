import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Tabs from ".";

storiesOf("Navigation/Tabs", module)
  .addDecorator(withKnobs)
  .add(
    "Playground",
    withInfo("")(() => (
      <Tabs
        onClick={action("onClick")}
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
