# ES6 Promises Workshop

A thorough workshop on ES6 Promises/A+ usage with somewhat realistic use cases.

This workshop has been inspired by [https://github.com/asakusuma/promise-workshop](https://github.com/asakusuma/promise-workshop),
so let's give a special thanks to Asa Kusuma.

## Setup and Execution
In order to setup the project, first clone this repo:

```
$ git clone https://github.com/MarcAtrapalo/promises-workshop
```

Then install all required modules:

```
$ cd promises-workshop
$ npm install
```

If you want to test the exercises, just executing this command will execute the tests:

```
$ npm test
```

## Exercises
Each exercise's goals are described within the tests. Try to make the tests pass!

Note you can run just the tests for one exercise by suffixing the `describe` block with `.only` as follows:

```javascript
describe.only('1. Hello World', () => {
    ...
});
```