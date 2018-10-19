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
- accept a custom `className`
- pass down every remaining props

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
```
