# Input Component

## Usage

```jsx
import { Input } from "@heetch/flamingo-react";

export default () => <Input id="input-id" onChange={console.log} />;
```

## Props

#### `className`: String

```jsx
export default () => <Input className="myClass" />;
```

#### `disabled`: Boolean

```jsx
export default () => <Input disabled />;
```

#### `id`: String **- required**

```jsx
export default () => <Input id="input-id" />;
```

#### `invalid`: Boolean

```jsx
export default () => <Input invalid />;
```

#### `onChange`: Function **- required**

```jsx
export default () => <Input onChange={console.log} />;
```

#### `placeholder`: String

```jsx
export default () => <Input placeholder="My placeholder" />;
```

#### `type`: oneOf(`INPUT_TYPES`)

```jsx
import { Input, INPUT_TYPES } from "@heetch/flamingo-react";

export default () => <Input type={INPUT_TYPES.NUMBER} />;
```

#### `valid`: Boolean

```jsx
export default () => <Input valid />;
```
