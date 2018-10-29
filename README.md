# heetch-flamingo

`heetch-flamingo` is the Heetch's React Components Library.

## How to use

```
yarn add heetch-flamingo -s
```

or

```
npm i heetch-flamingo -s
```

### Important

We assume that you're using `normalize.css` in your project.
<br />
If not, please run `yarn add normalize.css -d` or `npm i normalize.css -d` and add it into your project.

## Add a new component

### Naming

The branch name should be `component/{name}`
<br />
e.g. `component/Button`

### Props

Every component must:

- Accept a custom `className`
- Default `className` must be `undefined` (not `null`). Otherwise this props will be displayed in the React Developer Tools.
- Pass down every remaining props

Example:

```js
const Button = ({ className, ...props }) => (
  <button
    className={cx("Button", {
      [className]: className,
    })}
    {...props}
  />
);

Button.defaultProps = {
  className: undefined,
};
```

## Add a new icon

1. Clean the `svg` content with [svgomg](https://jakearchibald.github.io/svgomg/)
2. Add it into `src/constants/icons.js`
3. _Et voilà_

```js
// src/constants/icons.js

export const IconNew = (
  <path d="M15.4 3.7L12.6.9l-12 12 12 12 2.8-2.8-9.2-9.2z" />
);
```
