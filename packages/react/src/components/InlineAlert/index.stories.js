import React from "react";
import { storiesOf } from "@storybook/react";

import InlineAlert from "./";
import { INLINE_ALERT_TYPES } from "../../constants/";

storiesOf("InlineAlert").add("With types", () =>
  Object.values(INLINE_ALERT_TYPES).map(type => (
    <InlineAlert
      title="Title"
      message={`Message of ${type} alert`}
      onClose={() => console.log("Closed")}
      type={type}
    />
  ))
);
