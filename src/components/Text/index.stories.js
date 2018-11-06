import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "./";

const preventDefault = e => e.preventDefault();

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

      <a href="http://heetch.com" onClick={preventDefault}>
        Default {"<a/>"} tag
      </a>
    </>
  ))
  .add("Custom html tag", () => <Text as="span">Span text</Text>);
