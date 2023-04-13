<div align="center">

## Flamingo: [Heetch's](https://www.heetch.com/) design system

#### Flamingo is a React component library for the web, built using styled-components

</div>

[Flamingo storybook](https://flamingo.pages.dev)

- [![npm](https://img.shields.io/npm/v/@heetch/flamingo-react.svg?label=@heetch/flamingo-react)](https://www.npmjs.com/package/@heetch/flamingo-react)

You can see all the components in action [here](https://flamingo.pages.dev).

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

Each pull request will be automatically deploy on [Cloudflare](https://pages.cloudflare.com/),
producing a unique URL such as [https://8f508124.flamingo.pages.dev](https://8f508124.flamingo.pages.dev/).

Each incremental changes will create a new slug.

## How-to create a new component

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

## How-to version and publish to npm
### Versioning format: `Major.Minor.Patch`
*Example `v1.7.4` (1 = Major, 7 = Minor, 4 = Patch)*

- Major - to be increased if the majority of Flamingo has been changed or updated
- Minor - to be incremented when adding a whole new component or feature
- Patch - to be incremented for bug fixes or small updates

### To publish `latest` package to npm:

 - Ensure you are logged in to npm using `npm login`
 - `yarn deploy` - follow prompts to choose versioning: `Major`, `Minor` or `Patch`

### To publish `non-latest` or `prerelease` package to npm:

 - Ensure you are logged in to npm using `npm login`
 - `yarn deploy` - follow prompts to choose versioning: `Prepatch`, `Preminor`, `Premajor`
 *If you would like to bump an existing `prerelease` package (i.e `5.0.1-alpha.0` => `5.0.1-alpha.1`)
 choose the option: `Custom Prerelease` then enter the prerelase tag name (`"alpha"` in this example)*


## License
MIT © [Heetch](https://github.com/heetch)
