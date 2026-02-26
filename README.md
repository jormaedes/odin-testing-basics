# Odin Project – Testing Practice

Practice project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) focused on Test Driven Development (TDD) with **Jest**.

## About

The goal of this project is to practice the TDD workflow: write tests first, watch them fail, then implement the functions to make them pass.

## Tech Stack

- JavaScript (ES6+)
- [Jest](https://jestjs.io/) — test runner
- [Babel](https://babeljs.io/) — enables ES6 `import`/`export` syntax with Jest

## Project Structure

```
├── src/
│   ├── capitalize.js
│   ├── reverseString.js
│   ├── calculator.js
│   ├── caesarCipher.js
│   └── analyzeArray.js
├── tests/
│   ├── capitalize.test.js
│   ├── reverseString.test.js
│   ├── calculator.test.js
│   ├── caesarCipher.test.js
│   └── analyzeArray.test.js
├── babel.config.js
└── package.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

## Functions

### `capitalize(string)`
Returns the string with its first character capitalized.

```js
capitalize("hello world") // "Hello world"
```

### `reverseString(string)`
Returns the string reversed.

```js
reverseString("hello") // "olleh"
```

### `calculator`
Object containing the four basic arithmetic operations: `add`, `subtract`, `multiply`, and `divide`. Throws an error when dividing by zero.

```js
calculator.add(2, 3)      // 5
calculator.divide(10, 0)  // throws error
```

### `caesarCipher(string, shift)`
Returns the string with each alphabetical character shifted by the given amount. Wraps from `z` back to `a`, preserves case, and leaves non-alphabetical characters unchanged.

```js
caesarCipher("Hello, World!", 3) // "Khoor, Zruog!"
caesarCipher("xyz", 3)           // "abc"
```

### `analyzeArray(array)`
Takes an array of numbers and returns an object with `average`, `min`, `max`, and `length`.

```js
analyzeArray([1, 8, 3, 4, 2, 6])
// { average: 4, min: 1, max: 8, length: 6 }
```

## Setup Details

To use ES6 `import`/`export` syntax with Jest, this project uses Babel. The `babel.config.js` uses CommonJS syntax (`module.exports`) since Babel loads this file before any transformation takes place:

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```