import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INPUT_TYPES } from "../../constants";
import Input from ".";

const types = Object.values(INPUT_TYPES);
const states = ["default", "hover", "focus", "disabled"];

const inputProps = () => ({
  id: `input-${Math.random()}`,
  onChange: action("onChange"),
});

storiesOf("Form controls/Input", module)
  .addDecorator(withKnobs)
  .add("With types", () =>
    types.map(type => (
      <div key={`input-${type}`}>
        <Input {...inputProps()} placeholder={`Type: ${type}`} type={type} />
      </div>
    ))
  )
  .add("With states", () => (
    <>
      <div>
        <Input {...inputProps()} placeholder="Props: placeholder" />
      </div>

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
  .add("Playground", () => (
    <>
      <Input
        placeholder={text("Placeholder", "Placeholder")}
        value={text("Value", "My text input")}
        invalid={boolean("Is invalid?", false)}
        valid={boolean("Is valid?", false)}
        disabled={boolean("Is disabled?", false)}
        onChange={action("onChange")}
      />
    </>
  ));
