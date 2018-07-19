# 9.0.2 (2018-07-19)

* fix for Cancel selection in file browser causes loss of original file selection



# 9.0.1 (2018-05-30)
* **Updated** Pin `ember-cli-notifications` to version `4.2.1` to fix broken demo app

# 9.0.0 (2018-04-13)

* Upgraded `ember-frost-core` to ^8.0.0

# 8.0.0 (2018-03-22)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.2`
* **Updated** `ember-prop-types` to `^7.0.1`
* **Updated** `ember-frost-core` to `^7.0.0`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 7.0.0 (2018-01-05)
* Remove `ember-cli-import-polyfill` NPM devDependency
* Remove `ember-cli-sri` NPM devDependency
* Remove `ember-lodash` NPM devDependency
* Remove `ember-inflector` Bower dependency
* Remove `lodash` Bower dependency
* Remove useLintTree ember-cli-mocha configuration
* Remove _package-lock.json_ until officially support Node 8
* Downgrade and pin `ember-code-snippet` NPM devDependency to `1.7.0`
* Pin `ember-cli-code-coverage` NPM devDependency to `0.3.12`
* Pin `ember-hook` NPM dependency to `1.4.2`
* Pin `highlightjs` Bower dependency to `9.12.0`
* Pin `marked` Bower dependency to `0.3.6`
* Update `bower` NPM devDependency to `^1.8.2`
* Upgrade `ember-cli-frost-blueprints` NPM devDependency to `^5.0.1`
* Upgrade `ember-cli-notifications` NPM devDependency to `^4.2.1`
* Upgrade and pin `ember-cli-sass` NPM dependency to `7.1.1`
* Upgrade `ember-browserify` NPM devDependency to `^1.2.0`
* Upgrade `ember-frost-core` NPM dependency to `^5.0.0`
* Upgrade `ember-prop-types` NPM dependency to `^6.0.1`
* Install `ember-frost-test@^4.0.0`
* Moved _config/coverage.js_ to _tests/dummy/config/coverage.js_
  

# 6.0.0 (2017-12-06)
* **Updated** to version 4 of `ember-frost-core`
* **Updated** to version 5 of `ember-prop-types` and move to dependency
* **Updated** to version 4 of `ember-cli-frost-blueprints`
* **Updated** `ember-hook` from devDependencies to dependency
* **Removed** `ember-spread` package since it is not used here and is now provided by `ember-frost-core` via it's own dependencies.
* **Removed** `ember-computed-decorators` package since it is not used here and is now provided by `ember-frost-core` via it's own dependencies.
* **Removed** `ember-concurrency` package since it is not used here and is now provided by `ember-frost-core` via it's own dependencies.
* **Removed** `ember-elsewhere` package since it is not used here and is now provided by `ember-frost-core` via it's own dependencies.
* **Removed** `ember-truth-helpers` package since it is not used here and is now provided by `ember-frost-core` via it's own dependencies.
* **Removed** blueprint file since it is no longer being used
* **Removed** `ember-cli-sass` from devDependencies since it is already in dependencies
* **Removed** loading of babel configuration options previously needed for `ember-computed-decorators`

# 5.2.1 (2017-11-17)
* #54 - Bind context to call of this._super.included() in index.js

# 5.2.0 (2017-08-25)
- The `accept` property (default '*') is no longer required
- Fixed the specification of the file picker's proptypes
- Added tests that validate `proptypes` of our component


# 5.1.8 (2017-08-11)
* Upgrade ember-cli 2.12.3 inter-dependencies

# 5.1.7 (2017-07-05)
* Upgrade `ember-cli` to `2.12.3`

# 5.1.6 (2017-05-16)
Change DOM binding in bindChange and unbindChange function in case of memory leak


# 5.1.5 (2017-05-11)
* **Updated** the secure tokens in `.travis.yml`
* **Removed** `testem.json` in favor of `testem.js`
* **Removed** `ember-cli-visual-acceptance` and any files it brought in or created


# 5.1.4 (2017-05-05)
* **Added** blueprint check
* **Added** missing dependency to `ember-spread`

# 5.1.3
* **Updated** the travis.yml and package.json to run code coverage

# 5.1.2
* **Updated** the travis scripts used for bumping and publishing

# 5.1.1
* **Updated** to use latest pr-bumper which supports being able to set a PR to `none` when publishing a new version is not desired.


# 5.1.0
* **Updated** integration tests to remove the deprecated use of `describeComponent()`
* **Updated** `ember-cli-mocha` to latest version
* **Added**  `ember-cli-chai` since it has been broken out into a separate addon.
* **Updated** ember-try configuration in `travis.yml` and `package.json`

# 5.0.0
**upgraded** frost-core to 1.0.0


# 4.0.1
**fix** gh-pages demo.



# 4.0.0
**updated** minimum node version to 6.x



# 3.0.0
**updated** prop-types and used them.



# 2.0.0
- Updated to Ember 2.8 for LTS. 
- Added linting. 
- Added hooks in tests


# 1.1.0
* Added validateDrag parameter to determine if isDragging should be applied
* Added placeholderText parameter to specify custom placeholder text



# 1.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.16
- Update visual acceptance

# 0.2.15
- Update visual acceptance

# 0.2.14
* Updated styling to better match [UX Guidelines](https://confluence.ciena.com/display/blueplanet/File+chooser+-+RR)

# 0.2.12
* Updated styling to better match [UX Guidelines](https://confluence.ciena.com/display/blueplanet/File+chooser+-+RR)

# 0.2.5

Added drag/drop support
