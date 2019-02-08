import { configure } from "@storybook/react";

import "normalize.css";
import "../../css/dist/index.css";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
