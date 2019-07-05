# Button Component

## Usage

```jsx
import { Button } from "@heetch/flamingo-react";

export default () => <Button>Content</Button>;
```

## Props

#### `as`: String or Function

```jsx
export default () => <Button as="a" />;
```

```jsx
export default () => <Button as={Link} />;
```

#### `className`: String

```jsx
export default () => <Button className="myClass" />;
```

#### `disabled`: Boolean

```jsx
export default () => <Button disabled />;
```

#### `intent`: oneOf(`INTENTS`)

```jsx
import { Button, INTENTS } from "@heetch/flamingo-react";

export default () => <Button intent={INTENTS.SECONDARY} />;
```
