<div align="center">

## Flamingo: [Heetch's](https://www.heetch.com/) design system

#### Flamingo is a React component library for the web, built using styled-components

</div>

[Flamingo storybook](https://flamingo.heetch-eng.now.sh)

- [![npm](https://img.shields.io/npm/v/@heetch/flamingo-react.svg?label=@heetch/flamingo-react)](https://www.npmjs.com/package/@heetch/flamingo-react)

You can see all the components in action [here](https://flamingo.heetch-eng.now.sh).

## How to use

From npm:
`npm install @heetch/flamingo-react`

From yarn:
`yarn add @heetch/flamingo-react`

Add the CSS globally (the file is used to add CSS variables):

```javascript
import '@heetch/flamingo-react/dist/styles.css';
```

You can then import all components directly:

```
import { Button, Icon, SidePanel } from '@heetch/flamingo-react';
```

And extend them using `styled` from Styled Components

> Note that not all components are exported as a StyledComponent due to having logic inside,
> but the building blocks, like Button, Icon, Grid, are all pure Styled Components.

```jsx
export const FlamingoSpinner = styled(Spinner).attrs(props => ({
  size: props.size || 'l',
}))`
  margin: ${({ margin }) => margin || '20px auto'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

## CSS package (deprecated)

The `@heetch/flamingo-css` package is now deprecated as we are now using `styled-components`

However, you can still use it and browse the files on [its latest stable version (v1.12.0)](https://github.com/heetch/flamingo/tree/v1.12.0/packages/css)

## How-to review new components

Each pull request will be automatically deploy on [Zeit](https://zeit.co) via `now`,
producing a unique URL such as https://flamingo-git-gyndav-featzeit.heetch-eng.now.sh

Each incremental changes will create a new slug.

## How-to create new component

Add a new folder in `src/components`
Name your new folder with your component name.
Each folder should contain :
One `index.js`
One `index.stories.js`
One `styles.js` (if you need specific styling)
Don't forget to export your component in `src/components/index.js`

## How-to add new icons

All you have to do is add the svg file in src/icons with the correct naming.
Then run
`yarn icons` || `npm icons`
it will automatically add your new icon in our `icons.js` with the correct indentation.

## License

MIT © [Heetch](https://github.com/heetch)
