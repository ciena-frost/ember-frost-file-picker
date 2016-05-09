[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-file-picker.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-file-picker

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-file-picker.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-file-picker

[npm-img]: https://img.shields.io/npm/v/ember-frost-file-picker.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-file-picker

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-file-picker
A component for picking files

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Development](#development)

## Installation
```
ember install ember-frost-file-picker
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `accept` | `string` | `<file-extension>` | Comma separated list of file types accepted |
| `onChange` | `string` | `<action-name>` | Triggers action when file selection changes |
| `validate` | `string` | `<action-name>` | Action to trigger to validate file content |

## Examples

### Example
```handlebars
{{frost-file-picker
 accept='.jpeg'
 validate=(action "validateFile")
 onChange=(action "fileChanged")}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-file-picker.git
cd ember-frost-file-picker
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-file-picker/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
