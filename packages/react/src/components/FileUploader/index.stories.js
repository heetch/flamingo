import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import FileUploader from ".";

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
