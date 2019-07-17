import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageUploader from ".";

const inputName = "input-name";
const onChange = console.log;

const stories = storiesOf("Uploaders/ImageUploader", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => (
  <ImageUploader name={inputName} onChange={onChange} />
));
