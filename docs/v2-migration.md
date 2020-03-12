# How to migrate to the v2

## The `@heetch/flamingo-css` package has been deprecated.
### What does it means?

Every React component exported from `@heetch/flamingo-react` won't consume CSS variables anymore.

Hence, they will not rely on HTML classes.

NB: You can still use CSS variables as a reference in your app, but they won't support additional updates
https://github.com/heetch/flamingo/tree/v1.12.0/packages/css

## Breaking changes
- You will need to wrap your app into the `GlobalStyles` components
- The `UiText` components still exports `VARIANTS` constants, but they are now uppercased to match the other ones
