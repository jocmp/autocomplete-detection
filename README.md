# Autofill Detection

Detects when a user enters from autofill.

This method uses two approaches.

- In Webkit or Chromium (Blink) based browsers, the code checks the incoming event prototype. If the prototype is not `InputEvent`,
the the event is from an autofill.
- On Firefox, all `'input'` listeners receive `InputEvent` objects, but the `inputType` varies.
If the input type is `insertReplacementText`, then the event is also from autofill.


## Getting Started

Try out the demo on [CodeSandbox](https://codesandbox.io/p/github/jocmp/autofill-detection/main)

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
