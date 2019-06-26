import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import InlineAlert from "./";
import { INLINE_ALERT_TYPES } from "../../constants/";

storiesOf("Alerts")
  .addDecorator(withKnobs)
  .add(
    "InlineAlert",
    withInfo("")(() => (
      <InlineAlert
        title={text("Title", "Title of alert")}
        message={text("Message", "Alert message")}
        onClose={() => console.log("Closed")}
        type={select(
          "Alert type",
          INLINE_ALERT_TYPES,
          INLINE_ALERT_TYPES.INFORMATION
        )}
      />
    ))
  );
