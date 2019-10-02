import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import FileUploader from ".";
import Helper from "../Helper";
import Label from "../Label";

const inputName = "input-name";
const stories = storiesOf("Uploaders/FileUploader", module);

stories.add("Playground", () => (
  <FileUploader
    name={inputName}
    onChange={action("onChange")}
    isLoading={boolean("Is loading", false)}
    hasError={boolean("Has error", false)}
    multiple={boolean("Has multiple files", true)}
  />
));

stories.add("Within form", () => (
  <>
    <Label htmlFor={inputName}>File uploader label</Label>
    <FileUploader
      name={inputName}
      onChange={action("onChange")}
      multiple={boolean("Has multiple files", true)}
    />
    <Helper>Helper text</Helper>
  </>
));
