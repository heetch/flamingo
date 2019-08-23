import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { INPUT_TYPES } from "../../constants";
import Input from ".";

const types = Object.values(INPUT_TYPES);
const states = ["default", "hover", "focus", "disabled"];

const getId = () => `input-${Math.random()}`;

const stories = storiesOf("Form controls/Input", module);

stories.addDecorator(withKnobs);

stories.add("With types", () =>
  types.map(type => (
    <div key={`input-${type}`}>
      <Input
        id={getId()}
        placeholder={`Type: ${type}`}
        type={type}
        onChange={action("onChange")}
      />
    </div>
  ))
);

stories
  .add("With states", () => (
    <>
      {states.map(state => (
        <div key={`input-${state}`}>
          <Input
            id={getId()}
            className={`is-${state}`}
            defaultValue={`State: ${state}`}
            disabled={state === "disabled"}
            onChange={action("onChange")}
          />
        </div>
      ))}

      <div>
        <Input
          id={getId()}
          defaultValue="Props: invalid"
          invalid
          onChange={action("onChange")}
        />
      </div>

      <div>
        <Input
          id={getId()}
          defaultValue="Props: valid"
          valid
          onChange={action("onChange")}
        />
      </div>
    </>
  ))
  .add("With custom props", () => (
    <>
      <Input
        id={getId()}
        placeholder="Default input"
        onChange={action("onChange")}
      />
      <Input
        id={getId()}
        placeholder="Will `fill` prop"
        fill
        onChange={action("onChange")}
      />
    </>
  ));
