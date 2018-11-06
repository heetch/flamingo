import React from "react";
import { storiesOf } from "@storybook/react";
import { Helper, Input } from "./";

const defaultInputProps = {
  onChange: console.log,
};

const formProps = {
  onSubmit: e => e.preventDefault(),
};

const renderContent = ({ inputProps = {}, withHelper = false } = {}) => (
  <form {...formProps}>
    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="first-name-input-id"
        placeholder="First name"
      />
      {withHelper && <Helper>First name helper</Helper>}
    </div>

    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="last-name-input-id"
        placeholder="Last name"
      />
      {withHelper && <Helper>Last name helper</Helper>}
    </div>

    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="email-input-id"
        type="email"
        placeholder="Email"
      />
      {withHelper && <Helper>Email helper</Helper>}
    </div>
  </form>
);

storiesOf("Form", module)
  .add("Default", () => renderContent())
  .add("With helper", () => renderContent({ withHelper: true }))
  .add("With valid inputs", () =>
    renderContent({
      withHelper: true,
      inputProps: { valid: true },
    })
  )
  .add("With invalid inputs", () =>
    renderContent({
      withHelper: true,
      inputProps: { invalid: true },
    })
  );
