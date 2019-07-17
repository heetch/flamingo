import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import FileUploader from ".";

const inputName = "input-name";
const onChange = console.log;

const stories = storiesOf("Uploaders/FileUploader", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => (
  <FileUploader
    name={inputName}
    onChange={onChange}
    isLoading={boolean("isLoading", false)}
    isErrored={boolean("isErrored", false)}
  />
));
