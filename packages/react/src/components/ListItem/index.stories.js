import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  select,
  boolean,
  text,
  number,
} from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { ICONS } from "../../constants/";

import ListItem from "./";

ICONS.None = null;

storiesOf("List Items")
  .addDecorator(withKnobs)
  .add(
    "ListItem",
    withInfo("")(() =>
      Array.from(new Array(number("Number of levels", 1))).map((_, index) => {
        const itemNumber = index + 1;
        const groupId = `Item ${itemNumber}`;

        return (
          <ListItem
            active={boolean(`(${itemNumber}) Is active?`, false, groupId)}
            title={text(`(${itemNumber}) Title`, "ListItem", groupId)}
            subtitle={text(
              `(${itemNumber}) Subtitle`,
              "This is subtitle",
              groupId
            )}
            value={text(`(${itemNumber}) Value`, "Click me", groupId)}
            subitem={boolean(`(${itemNumber}) Is subitem?`, false, groupId)}
            miniitem={boolean(`(${itemNumber}) Is mini item?`, false, groupId)}
            hideDivider={boolean(
              `(${itemNumber}) Should hide divider?`,
              false,
              groupId
            )}
            leftIcon={
              ICONS[select(`(${itemNumber}) Left icon`, ICONS, null, groupId)]
            }
            rightIcon={
              ICONS[select(`(${itemNumber}) Right icon`, ICONS, null, groupId)]
            }
            onClick={action("ListItem clicked")}
          />
        );
      })
    )
  );
