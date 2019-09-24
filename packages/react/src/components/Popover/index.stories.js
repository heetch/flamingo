import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import Button from "../Button";
import Popover from ".";

const { PLACEMENTS } = Popover;

const stories = storiesOf("Popover", module);

stories.addDecorator(withKnobs);
stories.add("Playground", () => (
  <Popover
    content="Popover content"
    placement={select("Placement", PLACEMENTS, PLACEMENTS.BOTTOM)}
  >
    <Button>Button</Button>
  </Popover>
));
