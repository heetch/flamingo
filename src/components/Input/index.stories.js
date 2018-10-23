import React from "react";
import { storiesOf } from "@storybook/react";

import { INPUT_TYPES } from "../../constants/";
import Input from "./";

const types = Object.values(INPUT_TYPES);
const states = ["default", "hover", "active", "disabled"];

const inputProps = () => ({
  id: `input-${Math.random()}`,
  onChange: console.log,
});

storiesOf("Input", module)
  .add("With types", () =>
    types.map(type => (
      <div key={`input-${type}`}>
        <Input {...inputProps()} placeholder={`Type: ${type}`} type={type} />
      </div>
    ))
  )
  .add("With states", () =>
    states.map(state => (
      <div key={`input-${state}`}>
        <Input
          {...inputProps()}
          className={`is-${state}`}
          defaultValue={`State: ${state}`}
          disabled={state === "disabled"}
        />
      </div>
    ))
  );
