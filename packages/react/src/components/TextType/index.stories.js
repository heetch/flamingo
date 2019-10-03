import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import TextType from ".";
import Input from "../Input";
import Text from "../Text";

const { TYPES } = TextType;

const types = Object.keys(TYPES);
const stories = storiesOf("TextType", module);

stories.addDecorator(withKnobs);

stories.add("With types", () =>
  types.map(type => (
    <TextType key={type} type={type}>
      {type}
    </TextType>
  ))
);

stories.add("With custom component", () => (
  <>
    <TextType as="div" type={TYPES.Heading1}>
      As div
    </TextType>
    <TextType as={Text} type={TYPES.Heading1}>
      As Text
    </TextType>
    <TextType as={Input} defaultValue="as Input" type={TYPES.Heading1} />
  </>
));

stories.add("Playground", () => (
  <TextType type={select("Types", types)}>
    {text("Content", "Content")}
  </TextType>
));
