# compare-by

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/compare-by?style=for-the-badge&logo=npm&logoColor=white&color=CB3837)](https://www.npmjs.com/package/compare-by)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?logo=buymeacoffee&logoColor=000000&style=for-the-badge)](https://www.buymeacoffee.com/tobiaswaelde)
[![Tests](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/test.yml?branch=main&style=for-the-badge&label=tests&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/test.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/build.yml?branch=main&style=for-the-badge&label=build&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/release.yml?branch=main&style=for-the-badge&label=release&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/release.yml)

Type-safe comparators for sorting arrays by one or more object properties, including nested values selected by a callback.

## Installation

```sh
pnpm add compare-by
# or
npm install compare-by
```

## Usage

```ts
import { compareBy } from 'compare-by';

const people = [
	{ name: { first: 'Ada', last: 'Lovelace' }, age: 36, active: true },
	{ name: { first: 'Grace', last: 'Hopper' }, age: 85, active: false },
];

// One property; `asc` is the default direction.
people.sort(compareBy({ key: 'age' }));

// A callback can select a nested property.
people.sort(compareBy({ key: (person) => person.name.last, dir: 'desc' }));

// Compare properties in order until one differs.
people.sort(compareBy([
	{ key: 'active', dir: 'desc' },
	{ key: (person) => person.name.last },
]));
```

## API

### `compareBy(props)`

Returns an `Array.prototype.sort` comparator. `props` accepts one `CompareKey` or an array of them. Keys are evaluated in order, so later keys break ties from earlier keys.

```ts
type CompareDirection = 'asc' | 'desc';
type CompareKey<T> = {
	key: keyof T | ((value: T) => unknown);
	dir?: CompareDirection;
};

function compareBy<T>(props: CompareKey<T> | CompareKey<T>[]): (a: T, b: T) => number;
```

The selected values must be strings, numbers, booleans, or `Date` instances. Other values cause `compareBy` to throw an `Unsupported data type for comparison` error when sorting.

### Value comparators

The package also exports `compareStrings`, `compareNumbers`, `compareBooleans`, `compareDates`, and `compareValues` for direct use. All accept `(a, b, dir?)` and return a negative number, zero, or a positive number.

- Strings use `localeCompare`.
- Dates compare their timestamps.
- Booleans sort `true` before `false` in ascending order.
- `compareValues` dispatches to the matching comparator and throws for unsupported or mixed value types.

## Development

This repository uses pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm build
```

`out/` is generated during the build and before npm publication; do not commit it. Add a changeset with `pnpm changeset` for every user-facing change. The release workflow creates a version PR and publishes it after that PR is merged.

## Contributing

Please use the [bug report](https://github.com/tobiaswaelde/compare-by/issues/new?template=bug_report.md) or [feature request](https://github.com/tobiaswaelde/compare-by/issues/new?template=feature_request.md) template. Include a focused test with behavior changes.

## License

[MIT](LICENSE)

## Author

[Tobias Wälde](https://tobiaswaelde.com)
