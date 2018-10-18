import React from "react";
import { storiesOf } from "@storybook/react";

import { INTENTS } from "../../constants/";
import Button from "./";

const intents = Object.values(INTENTS);
const states = ["default", "hover", "active", "disabled"];

storiesOf("Button", module).add("With intents", () =>
  intents.map(intent =>
    states.map(state => (
      <div>
        <Button
          key={`${intent}-${state}`}
          className={`is-${state}`}
          intent={intent}
        >
          {intent} :{state}
        </Button>
      </div>
    ))
  )
);
