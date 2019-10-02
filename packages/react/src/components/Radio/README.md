# Radio Component

Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space.

## Usage

```jsx
import { Radio } from "@heetch/flamingo-react";

export default () => (
  <>
    <Radio name="radio-group-1" helper="Label helper" value="Option 1">
      Label
    </Radio>
    <Radio name="radio-group-1" helper="Label helper" value="or Option 2">
      Label
    </Radio>
  </>
);
```
