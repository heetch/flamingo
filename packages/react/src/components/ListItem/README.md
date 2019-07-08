## The component

Single item with texts & right icon, which can be both used to display information or trigger navigation components & actions.

## Usage

```jsx
import { ListItem, ICONS } from "@heetch/flamingo-react";

export default () => (
  <>
    <ListItem
      title="List Item"
      subtitle="This is subtitle"
      value="Click me"
      onClick={actionHandler}
    />
    <ListItem
      title="Submenu"
      value="Click me"
      subitem
      leftIcon={ICONS.IconFilledArrowDown}
      onClick={actionHandler}
    />
    <ListItem
      title="Submenu 2"
      value="Click me"
      subitem
      hideDivider
      leftIcon={ICONS.IconFilledArrowDown}
      onClick={actionHandler}
    />
  </>
);
```
