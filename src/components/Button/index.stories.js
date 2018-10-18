import React from "react";
import { storiesOf } from "@storybook/react";

import { INTENTS } from "../../constants/";
import Button from "./";

const intents = Object.values(INTENTS);

storiesOf("Button", module)
  .add("Default", () => <Button>Default button</Button>)
  .add("With intents", () =>
    intents.map(intent => (
      <Button key={intent} intent={intent}>
        {intent} button
      </Button>
    ))
  );
