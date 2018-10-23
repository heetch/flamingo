import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./";

const defaultInputProps = {
  onChange: console.log,
};

const formProps = {
  onSubmit: e => e.preventDefault(),
};

const renderContent = ({ inputProps = {} } = {}) => (
  <form {...formProps}>
    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="first-name-input-id"
        placeholder="First name"
      />
    </div>

    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="last-name-input-id"
        placeholder="Last name"
      />
    </div>

    <div>
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="email-input-id"
        type="email"
        placeholder="Email"
      />
    </div>
  </form>
);

storiesOf("Form", module).add("Default", () => renderContent());
