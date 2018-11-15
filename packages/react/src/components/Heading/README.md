# Heading Component

## Usage

```jsx
import { Heading } from "@heetch/flamingo-react";

export default () => <Heading>Content</Heading>;
```

## Props

#### `as`: oneOf(`HEADING_LEVELS`)

```jsx
import { Heading, HEADING_LEVELS } from "@heetch/flamingo-react";

export default () => <Heading as={HEADING_LEVELS.h3} />;
```

#### `className`: String

```jsx
export default () => <Heading className="myClass" />;
```
