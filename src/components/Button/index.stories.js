import React from "react";
import { storiesOf } from "@storybook/react";

import { INTENTS } from "../../constants/";
import Button from "./";

const intents = Object.values(INTENTS);
const states = ["default", "hover", "active", "disabled"];

storiesOf("Button", module)
  .add("With intents", () =>
    intents.map(intent =>
      states.map(state => (
        <div key={`${intent}-${state}`}>
          <Button
            className={`is-${state}`}
            disabled={state === "disabled"}
            intent={intent}
          >
            {intent} :{state}
          </Button>
        </div>
      ))
    )
  )
  .add("As link", () => (
    <a href="heetch.com" onClick={e => e.preventDefault()}>
      <Button>Link</Button>
    </a>
  ));
