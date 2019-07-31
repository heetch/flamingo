## Toggle component

A toggle button allows the user to change a setting between two states. They are most effective when the on/off states are visually distinct.

## Usage

```jsx
import { Toggle } from "@heetch/flamingo-react";

export default () => (
  <Toggle
    label="Label"
    helper="Label toggle"
    checked
    onChange={state => console.log(state)}
  />
);
```
