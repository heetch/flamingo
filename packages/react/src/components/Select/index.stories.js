import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Select } from "..";

const states = ["default", "hover", "disabled"];

const defaultProps = () => ({
  id: `select-${Math.random()}`,
  onChange: action("onChange"),
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

const mapStringsToSelectOptions = options =>
  options.map(option => ({ label: option, value: option }));

storiesOf("Form controls/Select", module)
  .addDecorator(withKnobs)
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
  .add("Playground", () => (
    <Select
      options={mapStringsToSelectOptions(text("Options", "Foo,Bar").split(","))}
      onChange={action("onChange")}
    />
  ));
