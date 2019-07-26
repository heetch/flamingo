import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import FileUploader from ".";
import Helper from "../Helper";
import Label from "../Label";

const inputName = "input-name";

const stories = storiesOf("Uploaders/FileUploader", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => (
  <FileUploader
    name={inputName}
    onChange={action("onChange")}
    isLoading={boolean("isLoading", false)}
    isErrored={boolean("isErrored", false)}
  />
));

stories.add("Within form", () => (
  <>
    <Label>File uploader label</Label>
    <FileUploader name={inputName} onChange={action("onChange")} />
    <Helper>Helper text</Helper>
  </>
));
