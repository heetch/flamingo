## The component

This component is an inline alert, that can be used to present some kind of information for the users. It has 3 possible types:

- Information
- Success
- Error

## Usage

```jsx
import { InlineAlert, INLINE_ALERT_TYPES } from "@heetch/flamingo-react";

...

render() {
  const { showAlert } = this.state;

  return (
    {showAlert && (<InlineAlert
      type={INLINE_ALERT_TYPES.ERROR}
      title="Serious error"
      message="You shouldn't have done it!"
      onClose={() => this.setState({ showAlert: false })}
    />)
  )
}
```
