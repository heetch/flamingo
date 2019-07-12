import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";

import FileUploader from ".";

const { STATES } = FileUploader;

const inputName = "input-name";
const onChange = console.log;

const stories = storiesOf("Uploaders/FileUploader", module);

stories.addDecorator(withKnobs);

stories.add("With states", () =>
  Object.values(STATES).map(state => (
    <FileUploader
      onChange={onChange}
      state={state}
      name={`inputName-${state}`}
    />
  ))
);

stories.add("Playground", () => (
  <FileUploader
    name={inputName}
    onChange={onChange}
    state={select("state", STATES)}
  />
));
