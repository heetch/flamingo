# Icon Component

## Usage

```jsx
import { Icon, ICONS } from "@heetch/flamingo-react";

export default () => <Icon icon={ICONS.IconCheck} />;
```

## Props

#### `className`: String

```jsx
export default () => <Icon className="myClass" />;
```

#### `icon`: oneOf(`ICONS`) **- required**

```jsx
import { Icon, ICONS } from "@heetch/flamingo-react";

export default () => <Icon icon={ICONS.IconCheck} />;
```

#### `size`: oneOf(`ICON_SIZES`)

```jsx
import { Icon, ICON_SIZES } from "@heetch/flamingo-react";

export default () => <Icon size={ICON_SIZES.XL} />;
```
