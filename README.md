# Autocomplete Detection

An implementation of a [StackOverflow solution](https://stackoverflow.com/questions/11708092/detecting-browser-autofill/41530164#41530164) to detect when a user enters from autofill.

This implementation is limited to browsers that implement the `:-webkit-autofill` pseudo-selector but appears to work in Safari and Firefox.

As of March 2023, this approach does not work for Chromium browsers based on an ongoing [React GitHub issue](https://github.com/facebook/react/issues/1159#issuecomment-1372221230).

## Getting Started

Try out the demo on [CodeSandbox](https://codesandbox.io/p/github/jocmp/autocomplete-detection/main)

Or run it locally:

1. Clone this repo
2. Install the dependencies
   ```
   npm install
   ```
3. Run the server
   ```
   npm run start
   ```
4. Open your browser and navigate to http://localhost:3000
