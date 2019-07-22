import React from "react";
import { storiesOf } from "@storybook/react";

import { INPUT_TYPES } from "../../constants";
import Input from ".";

const types = Object.values(INPUT_TYPES);
const states = ["default", "hover", "focus", "disabled"];

const inputProps = () => ({
  id: `input-${Math.random()}`,
  onChange: console.log,
});

storiesOf("Form controls/Input", module)
  .add("With types", () =>
    types.map(type => (
      <div key={`input-${type}`}>
        <Input {...inputProps()} placeholder={`Type: ${type}`} type={type} />
      </div>
    ))
  )
  .add("With states", () => (
    <>
      {states.map(state => (
        <div key={`input-${state}`}>
          <Input
            {...inputProps()}
            className={`is-${state}`}
            defaultValue={`State: ${state}`}
            disabled={state === "disabled"}
          />
        </div>
      ))}

      <div>
        <Input {...inputProps()} defaultValue="Props: invalid" invalid />
      </div>

      <div>
        <Input {...inputProps()} defaultValue="Props: valid" valid />
      </div>
    </>
  ))
  .add("With custom props", () => (
    <>
      <Input {...inputProps()} placeholder="Default input" />
      <Input {...inputProps()} placeholder="Will `fill` prop" fill />
    </>
  ));
