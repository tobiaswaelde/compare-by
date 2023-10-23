<!-- omit in toc -->
# compare-by

<!-- project badges -->
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![Npm package yearly downloads](https://badgen.net/npm/v/compare-by)](https://npmjs.com/package/compare-by)
[![Quality Gate Status](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=alert_status&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Coverage](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=coverage&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Duplicated Lines (%)](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=duplicated_lines_density&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Lines of Code](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=ncloc&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Maintainability Rating](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=sqale_rating&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Reliability Rating](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=reliability_rating&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)
[![Security Rating](https://sq.srv.tobiaswaelde.com/api/project_badges/measure?project=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R&metric=security_rating&token=sqb_c5b3d3e8f6312b5bd707adab17d5dfe34549d48b)](https://sq.srv.tobiaswaelde.com/dashboard?id=tobiaswaelde_compare-by_AYtaChIePhYnLbS8eM9R)


`compare-by` is a versatile utility library that simplifies sorting arrays of objects by one or multiple object keys. It allows you to specify the sort direction for each key, providing fine-grained control over the sorting process.

<!-- omit in toc -->
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Sort by a Single Object Key](#sort-by-a-single-object-key)
  - [Sort by a Nested Object Key](#sort-by-a-nested-object-key)
  - [Sort by Multiple Keys](#sort-by-multiple-keys)
- [Project Badges](#project-badges)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Installation
You can install `compare-by` via [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):

<!-- omit in toc -->
### Using yarn
```sh
yarn add compare-by
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

## Project Badges
- **Npm Package Version:** The current version of the npm package.
- **Quality Gate Status:** Measures the quality of the code using [SonarQube](https://www.sonarqube.org/).
- **Coverage:** Shows the code coverage of your project.
- **Duplicated Lines (%):** Indicates the percentage of duplicated lines in your code.
- **Lines of Code:** Displays the total lines of code in your project.
- **Maintainability Rating:** Rates the maintainability of your code.
- **Reliability Rating:** Rates the reliability of your code.
- **Security Rating:** Rates the security of your code.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Author
[Tobias Wälde](https://tobiaswaelde.com)

## Acknowledgments
If your project is inspired by or uses other open-source projects, acknowledge them here. It's a good practice and shows respect to the open-source community.

Feel free to customize the author's name, website, license, contribution guidelines, and code of conduct links according to your project's specifics. This improved README provides more context and is well-structured to help users understand, install, and use your library effectively.