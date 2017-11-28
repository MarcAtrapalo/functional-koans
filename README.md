# Functional Programming Basics in ES6 Koans

A workshop that tries to explain functional programming 101 in ES6.
It is organized in tests with broken code that must be fixed for the test to pass.

## Setup and Execution
In order to setup the project, first clone this repo:

```
$ git clone https://github.com/MarcAtrapalo/functional-koans
```

Then install all required modules:

```
$ cd functional-koans
$ npm install
```

If you want to test the exercises, just executing this command will execute the tests:

```
$ npm test
```

## Exercises
Each exercise's goals are described within the tests.
Try to make the tests pass by filling in the blanks or fixing the broken code.

Note you can run just the tests for one exercise by suffixing the `describe` block with `.only` as follows:

```javascript
describe.only('1. Hello World', () => {
    ...
});
```