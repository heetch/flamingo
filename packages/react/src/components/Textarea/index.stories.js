import React from "react";
import { storiesOf } from "@storybook/react";

import Textarea from "./";

const states = ["default", "hover", "focus", "disabled"];

const textareaProps = () => ({
  id: `textarea-${Math.random()}`,
  onChange: console.log,
});

storiesOf("Textarea", module)
  .add("With states", () => (
    <>
      {states.map(state => (
        <div key={`textarea-${state}`}>
          <Textarea
            {...textareaProps()}
            className={`is-${state}`}
            defaultValue={`State: ${state}`}
            disabled={state === "disabled"}
          />
        </div>
      ))}

      <div>
        <Textarea {...textareaProps()} defaultValue="Props: invalid" invalid />
      </div>

      <div>
        <Textarea {...textareaProps()} defaultValue="Props: valid" valid />
      </div>
    </>
  ))
  .add("With custom props", () => (
    <>
      <Textarea {...textareaProps()} placeholder="Default textarea" />
      <Textarea {...textareaProps()} placeholder="Will `fill` prop" fill />
    </>
  ));
