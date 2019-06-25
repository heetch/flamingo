import React from "react";
import { storiesOf } from "@storybook/react";

import Tabulation from "./";

storiesOf("Tabulation").add("With types", () => (
  <Tabulation
    elements={["Cars", "Drivers", "Rides"]}
    onClick={e => console.log(e)}
    returnObjectFn={element => element}
  />
));
