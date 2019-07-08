## Tabs component

This component provides a bunch of tabs that can be used for the sake of navigation.

`elements` property is an array of `string`s or `objects`. In the latter case it's mandatory to provide `buildTabLabel` which would tell the component which property of the object should be presented as the tab label.

By default `onClick` method is called with an index of an element in array that has been clicked. It's possible to modify it by providing `buildReturnObject` though.

## Usage

### Array of `string`s

```jsx
import { Tabs } from "@heetch/flamingo-react";

const elements = ["First", "Second", "Third"];

export default () => (
  <>
    {/* When clicking first tab, logs "0" */}
    <Tabs elements={elements} onClick={e => console.log(e)} />
    {/* When clicking first tab, logs "First" because of `buildReturnObject` */}
    <Tabs
      elements={elements}
      buildReturnObject={e => e}
      onClick={e => console.log(e)}
    />
  </>
);
```

### Array of `object`s

```jsx
import { Tabs } from "@heetch/flamingo-react";

const elements = [
  {
    key: "first",
    value: "1st",
  },
  {
    key: "second",
    value: "2nd",
  },
  {
    key: "third",
    value: "3rd",
  },
];

export default () => (
  <>
    {/* When clicking first tab, logs:
        {
          key: "first",
          value: "1st"
        }
        because no `buildReturnObject` is defined
      */}
    <Tabs
      elements={elements}
      buildTabLabel={e => e.value}
      onClick={e => console.log(e)}
    />
    {/* When clicking first tab, logs "key" because `buildReturnObject` is defined
     */}
    <Tabs
      elements={elements}
      buildTabLabel={e => e.value}
      buildReturnObject={e => e.key}
      onClick={e => console.log(e)}
    />
  </>
);
```
