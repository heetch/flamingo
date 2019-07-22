## ListItem component

Single item with texts & right icon, which can be both used to display information or trigger navigation components & actions.

## Usage

```jsx
import { ListItem, ICONS } from "@heetch/flamingo-react";

export default () => (
  <>
    <ListItem
      subtitle="This is subtitle"
      value="Click me"
      onClick={actionHandler}
    >
      List Item
    </ListItem>
    <ListItem
      value="Click me"
      subitem
      leftIcon={ICONS.IconFilledArrowDown}
      onClick={actionHandler}
    >
      Submenu
    </ListItem>
    <ListItem
      value="Click me"
      subitem
      hideDivider
      leftIcon={ICONS.IconFilledArrowDown}
      onClick={actionHandler}
    >
      Submenu 2
    </ListItem>
  </>
);
```
