import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "./";

storiesOf("Text", module)
  .add("Default", () => (
    <>
      <Text>Default Text</Text>

      <strong>
        <Text>Strong Text</Text>
      </strong>

      <em>
        <Text>Emphasized Text</Text>
      </em>
    </>
  ))
  .add("Custom html tag", () => <Text as="span">Span text</Text>);
