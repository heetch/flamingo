# Select Component

## Usage

```jsx
import { Select } from "@heetch/flamingo-react";

export default () => <Select id="select-id" onChange={console.log} />;
```

## Props

#### `className`: String

```jsx
export default () => <Select className="myClass" />;
```

#### `disabled`: Boolean

```jsx
export default () => <Select disabled />;
```

#### `id`: String **- required**

```jsx
export default () => <Select id="select-id" />;
```

#### `onChange`: Function **- required**

```jsx
export default () => <Select onChange={console.log} />;
```

#### `options`: Array

```jsx
const options = [
  {
    label: "First option",
    value: "one",
  },
  {
    label: "Second option",
    value: "two",
  },
];

export default () => <Select options={options} />;
```
