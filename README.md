# Autocomplete Detection

Detects when a user enters from autofill.

This method uses two approaches.

- In Webkit or Chromium (Blink) based browsers, check if the event is an `InputEvent`, if it's not, then the data is from autofill.
- On Firefox, all events are input events but the `inputType` changes.
When this is available, check if it's `insertReplacementText`. When this is true, then the data is also from autofill.


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
