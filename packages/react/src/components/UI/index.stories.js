import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import UI from ".";
import Input from "../Input";
import Text from "../Text";

import { UI_TYPES } from "../../constants";

const types = Object.keys(UI_TYPES);
const stories = storiesOf("UI", module);

stories.addDecorator(withKnobs);

stories.add("With types", () =>
  types.map(type => (
    <UI key={type} type={type}>
      {type}
    </UI>
  ))
);

stories.add("With custom component", () => (
  <>
    <UI as="div" type={UI_TYPES.Heading1}>
      As div
    </UI>
    <UI as={Text} type={UI_TYPES.Heading1}>
      As Text
    </UI>
    <UI as={Input} defaultValue="as Input" type={UI_TYPES.Heading1} />
  </>
));

stories.add("Playground", () => (
  <UI type={select("Types", types)}>{text("Content", "Content")}</UI>
));
