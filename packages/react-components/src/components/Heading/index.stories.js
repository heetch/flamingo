import React from "react";
import { storiesOf } from "@storybook/react";

import { HEADING_LEVELS } from "../../constants/";
import Heading from "./";

const levels = Object.values(HEADING_LEVELS);

storiesOf("Heading", module).add("With levels", () =>
  levels.map(level => (
    <Heading key={`heading-${level}`} as={level}>
      Heading `{level}`
    </Heading>
  ))
);
