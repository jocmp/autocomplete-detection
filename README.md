# Autofill Detection

Detects when a user enters from autofill.

This method uses two approaches.

- In Webkit based browsers, the code checks the incoming event data. If the data is empty,
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


## Appendix

`insertReplacementText` is [documented by the W3C](https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes) as a type that is mean to "replace existing text by means of a spell checker, auto-correct or similar."

While Webkit browsers support `InputEvent`, there's an outstanding bug that does not surface input type
or data. The expected value would also be `insertReplacementText` which is how Firefox acts.

- https://bugs.webkit.org/show_bug.cgi?id=217692
- https://bugs.webkit.org/show_bug.cgi?id=217693
- https://bugs.chromium.org/p/chromium/issues/detail?id=1051844
