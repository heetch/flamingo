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
import {
  ICONS,
  LIST_ITEM_TYPES,
  LIST_ITEM_VALUES_TYPES,
} from "../../constants/";

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
            type={select(
              `(${itemNumber}) Type`,
              LIST_ITEM_TYPES,
              null,
              groupId
            )}
            valueType={select(
              `(${itemNumber}) Value type`,
              LIST_ITEM_VALUES_TYPES,
              null,
              groupId
            )}
            strongValue={boolean(
              `(${itemNumber}) Strong value`,
              false,
              groupId
            )}
            subtitle={text(
              `(${itemNumber}) Subtitle`,
              "This is subtitle",
              groupId
            )}
            value={text(`(${itemNumber}) Value`, "Click me", groupId)}
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
          >
            {text(`(${itemNumber}) Title`, "ListItem", groupId)}
          </ListItem>
        );
      })
    )
  );
