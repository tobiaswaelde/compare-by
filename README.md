<!-- omit in toc -->
# compare-by

<!-- project badges -->
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/compare-by?style=for-the-badge&logo=npm&logoColor=white&color=CB3837)](https://www.npmjs.com/package/compare-by)
[![Buy Me a Coffee](https://img.shields.io/badge/buy_me_a_coffee-tobiaswaelde-ffdd00?logo=buymeacoffee&logoColor=000000&style=for-the-badge)](https://www.buymeacoffee.com/tobiaswaelde)
[![Tests](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/test.yml?branch=main&style=for-the-badge&label=tests&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/test.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/build.yml?branch=main&style=for-the-badge&label=build&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/tobiaswaelde/compare-by/release.yml?branch=main&style=for-the-badge&label=release&logo=githubactions&logoColor=white)](https://github.com/tobiaswaelde/compare-by/actions/workflows/release.yml)


`compare-by` is a versatile utility library that simplifies sorting arrays of objects by one or multiple object keys. It allows you to specify the sort direction for each key, providing fine-grained control over the sorting process.

<!-- omit in toc -->
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Sort by a Single Object Key](#sort-by-a-single-object-key)
  - [Sort by a Nested Object Key](#sort-by-a-nested-object-key)
  - [Sort by Multiple Keys](#sort-by-multiple-keys)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Installation
You can install `compare-by` via [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/):

<!-- omit in toc -->
### Using pnpm
```sh
pnpm add compare-by
```

<!-- omit in toc -->
### Using npm
```sh
npm install compare-by
```

## Usage
Here's how you can use compare-by:

```ts
import { compareBy } from 'compare-by';
const arr = [{
    name: {
      first: 'John',
      last: 'Doe'
    },
    birthday: new Date(1998, 10, 20),
    profileConfirmed: true,
    age: 24
  },
  /* ... */
];

// sort by single key
arr.sort(compareBy({
  key: 'age',
  dir: 'desc', // 'asc' | 'desc', default: 'asc'
}));

// sort by nested key
arr.sort(compareBy({
  key: (obj) => obj.name.first,
}));

// sort by multiple keys
arr.sort(compareBy([
  { key: 'profileCreated' },
  { key: (obj) => obj.name.last, dir: 'desc' }
]));
```



## Examples

### Sort by a Single Object Key
<!-- omit in toc -->
#### Ascending Order
```ts
const arr = [{ x: 'b' }, { x: 'a' }, { x: 'c' }];
arr.sort(compareBy({ key: 'x' }));
console.log(arr); // [{ x: 'a' }, { x: 'b' }, { x: 'c' }]
```

<!-- omit in toc -->
#### Descending Order
```ts
const arr = [{ x: 'b' }, { x: 'a' }, { x: 'c' }];
arr.sort(compareBy({ key: 'x', dir: 'desc' }));
console.log(arr); // [{ x: 'c' }, { x: 'b' }, { x: 'a' }]
```

### Sort by a Nested Object Key
<!-- omit in toc -->
#### Ascending Order
```ts
const arr = [{ x: { y: 'b' } }, { x: { y: 'a' } }];
arr.sort(compareBy({ key: (el) => el.x.y }));
console.log(arr); // [{ x: { y: 'a' } }, { x: { y: 'b' } }]
```

<!-- omit in toc -->
#### Descending Order
```ts
const arr = [{ x: { y: 'a' } }, { x: { y: 'b' } }];
arr.sort(compareBy({ key: (el) => el.x.y, dir: 'desc' }));
console.log(arr); // [{ x: { y: 'b' } }, { x: { y: 'a' } }]
```

### Sort by Multiple Keys
```ts
const arr = [
	{ x: 'c', y: 'c' },
	{ x: 'b', y: 'a' },
	{ x: 'b', y: 'b' },
];
arr.sort(compareBy([
  { key: 'x' }, // sort by 'x' in ascending order
  { key: 'y', dir: 'desc' } // sort by 'y' in descending order
]));

console.log(arr);
/**
 * [
 *   { x: 'b', y: 'b' },
 *   { x: 'b', y: 'a' },
 *   { x: 'c', y: 'c' },
 * ]
 */
```

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Author
[Tobias Wälde](https://tobiaswaelde.com)

## Acknowledgments
If your project is inspired by or uses other open-source projects, acknowledge them here. It's a good practice and shows respect to the open-source community.

Feel free to customize the author's name, website, license, contribution guidelines, and code of conduct links according to your project's specifics. This improved README provides more context and is well-structured to help users understand, install, and use your library effectively.
