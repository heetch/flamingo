# Textarea Component

## Usage

```jsx
import { Textarea } from "@heetch/flamingo-react";

export default () => <Textarea id="textarea-id" onChange={console.log} />;
```

## Props

#### `className`: String

```jsx
export default () => <Textarea className="myClass" />;
```

#### `disabled`: Boolean

```jsx
export default () => <Textarea disabled />;
```

#### `id`: String **- required**

```jsx
export default () => <Textarea id="textarea-id" />;
```

#### `invalid`: Boolean

```jsx
export default () => <Textarea invalid />;
```

#### `onChange`: Function **- required**

```jsx
export default () => <Textarea onChange={console.log} />;
```

#### `placeholder`: String

```jsx
export default () => <Textarea placeholder="My placeholder" />;
```

#### `valid`: Boolean

```jsx
export default () => <Input valid />;
```
