import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ImageUploader from ".";

const inputName = "input-name";
const stories = storiesOf("Uploaders/ImageUploader", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => (
  <ImageUploader
    name={inputName}
    onChange={action("onChange")}
    multiple={boolean("Has multiple files", true)}
  />
));
