import { configure } from "@storybook/react";

import "normalize.css";
import "@heetch/flamingo-css";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
