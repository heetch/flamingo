import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";

import Spinner from ".";
import { ICON_SIZES } from "../../constants";

const sizes = Object.values(ICON_SIZES);
const stories = storiesOf("Spinner", module);

stories.addDecorator(withKnobs);

stories.add("Playground", () => (
  <Spinner size={select("Size", sizes, ICON_SIZES.M)} />
));
