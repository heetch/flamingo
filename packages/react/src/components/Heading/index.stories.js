import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";

import Heading from "./";

const { LEVELS } = Heading;

const levels = Object.keys(LEVELS);
const stories = storiesOf("Heading", module);

stories.addDecorator(withKnobs);

stories.add("With levels", () =>
  levels.map(level => (
    <Heading key={`heading-${level}`} as={level}>
      {text("content", "Heading")}
    </Heading>
  ))
);
