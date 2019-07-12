import React from "react";
import { storiesOf } from "@storybook/react";

import { Select } from "..";

const states = ["default", "hover", "disabled"];

const defaultProps = () => ({
  id: `select-${Math.random()}`,
  onChange: console.log,
  options: [
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
  ],
});

storiesOf("Select", module)
  .add("Default", () => <Select {...defaultProps()} />)
  .add("With states", () =>
    states.map(state => (
      <div key={`input-${state}`}>
        <Select
          {...defaultProps()}
          className={`is-${state}`}
          defaultValue={`State: ${state}`}
          disabled={state === "disabled"}
        />
      </div>
    ))
  )
  .add("With custom props", () => (
    <>
      <Select {...defaultProps()} />
      <Select {...defaultProps()} fill />
    </>
  ));
