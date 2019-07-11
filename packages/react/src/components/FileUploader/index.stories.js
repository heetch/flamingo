import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import FileUploader from ".";

const stories = storiesOf("FileUploader", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => <FileUploader />);
