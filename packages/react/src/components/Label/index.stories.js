import React from "react";
import { storiesOf } from "@storybook/react";

import { Label } from "..";

const defaultProps = {
  htmlFor: "input-id",
};

storiesOf("Form controls/Label", module).add("Default", () => (
  <Label {...defaultProps}>Input Label</Label>
));
