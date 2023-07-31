<!--instructions-of-template--># cnp-template-typescript-eslint-plugin

> A bolierplate for create [eslint](https://github.com/eslint/eslint) plugin with typescript;
>
> A bolierplate for that can be used by [create-npm-package](https://github.com/hsuehic/create-npm-package)

## Usage

```bash
npx create-npm-packages --template hsuehic/cnp-template-typescript-eslint-plugin-eslint-plugin
```

**File Structure**:

- `docs/rules/` is the directory to put documentation.
- `src/rules/` is the directory to put rule definitions.
- `scripts/` is the directory to put development scripts.
- `tests/` is the directory to put tests for `src/`.
- `.eslintignore` and `.eslintrc.js` are the configuration to lint this repository.

**Dependencies**:

This template uses [Jest](https://jestjs.io/) and [GitHub Actions](https://github.co.jp/features/actions) for tests, as same as ESLint itself. If you want to use other tools, customize it.

**Development Tools**:

- `npm run add-rule foo` command adds a rule definition.
- `npm update` command updates the following stuff by the `meta` property of rules:
  - the header of `docs/rules/*.md`.
  - `lib/configs/recommended.ts` file.
  - `lib/index.ts` file.
  - the rule table in `README.md` file.

Below is an example of README.

---

<!--instructions-of-template-->

# <!--package-name-->my-package-name<!--package-name-->

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Lint Status][lint-img]][lint-url]
[![Test Status][test-img]][test-url]
[![Build Status][build-img]][build-url]
[![Release Status][release-img]][release-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]

A template for ESLint plugins.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
npm install --save-dev eslint my-package-name
```

### Requirements

- Node.js v8.10.0 or newer versions.
- ESLint v5.16.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.json`.

```json
{
  "plugins": ["xxxx"],
  "rules": {
    "xxxx/example-rule": "error"
  }
}
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

Write your config file such as `.eslintrc.json` to enables the recommended rules.

```json
{
  "extends": ["plugin:xxxx/recommended"],
  "plugins": ["xxxx"]
}
```

## Rules

<!--RULE_TABLE_BEGIN-->

### Stylistic Issues

| Rule ID                                           | Description      |     |
| :------------------------------------------------ | :--------------- | :-: |
| [xxxx/example-rule](./docs/rules/example-rule.md) | An example rule. | ⭐️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases]()

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests.
- `npm run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.

<!--badge-variables-->

[lint-img]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/actions/workflows/lint.yaml/badge.svg
[lint-url]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/workflows/lint.yaml
[test-img]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/actions/workflows/test.yaml/badge.svg
[test-url]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/workflows/test.yaml
[build-img]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/actions/workflows/build.yaml/badge.svg
[build-url]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/workflows/build.yaml
[release-img]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/actions/workflows/release.yaml/badge.svg
[release-url]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/workflows/release.yaml
[downloads-img]: https://img.shields.io/npm/dt/cnp-template-typescript-eslint-plugin
[downloads-url]: https://www.npmtrends.com/cnp-template-typescript-eslint-plugin
[npm-img]: https://img.shields.io/npm/v/cnp-template-typescript-eslint-plugin
[npm-url]: https://www.npmjs.com/package/cnp-template-typescript-eslint-plugin
[issues-img]: https://img.shields.io/github/issues/hsuehic/cnp-template-typescript-eslint-plugin
[issues-url]: https://github.com/hsuehic/cnp-template-typescript-eslint-plugin/issues
[codecov-img]: https://codecov.io/gh/hsuehic/cnp-template-typescript-eslint-plugin/branch/main/graph/badge.svg?token=38H26EP6UM
[codecov-url]: https://codecov.io/gh/hsuehic/cnp-template-typescript-eslint-plugin

<!--badge-variables-->
