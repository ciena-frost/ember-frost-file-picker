[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-file-picker.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-file-picker

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-file-picker.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-file-picker

[npm-img]: https://img.shields.io/npm/v/ember-frost-file-picker.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-file-picker

[ember-observer-badge]: http://emberobserver.com/badges/ember-frost-file-picker.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-frost-file-picker

[ember-img]: https://img.shields.io/badge/ember-2.3+-orange.svg "Ember 2.3+"

[bithound-img]: https://www.bithound.io/github/ciena-frost/ember-frost-file-picker/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-frost/ember-frost-file-picker

# ember-frost-file-picker
A component for picking files

###### Dependencies

![Ember][ember-img]
[![NPM][npm-img]][npm-url]

###### Health

[![Travis][ci-img]][ci-url]
[![Coveralls][cov-img]][cov-url]

###### Security

[![bitHound][bithound-img]][bithound-url]

###### Ember Observer score
[![EmberObserver][ember-observer-badge]][ember-observer-badge-url]

## Installation
```
ember install ember-frost-file-picker
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `accept` | `string` | `<file-extension>` | Comma separated list of file types accepted |
| `onChange` | `string` | `<action-name>` | Triggers action when file selection changes |
| `placeholderText` | `string` | `<input-placeholder>` | Defines input placeholder text. Default is 'Drop your file here' |
| `validate` | `string` | `<action-name>` | Action to trigger to validate file content |
| `validateDrag` | `string` | `<action-name>` | Action to trigger to determine if `isDragging` should be applied. In Chrome, you can check event.dataTransfer.items[0] for information on the item being dragged |

## Testing with ember-hook
The file picker component is accessible using ember-hook with the top level hook name or you can access
the internal components as well -
* Default top level hook - `$hook('file-picker')`
* Browse button hook - `$hook('<hook-name>-button')`
* Input field hook - `$hook('<hook-name>-input')`

## Examples
Detailed API and example usage can be found in the sample application in tests/dummy, which is also running at http://ciena-frost.github.io/ember-frost-file-picker

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
