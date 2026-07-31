import { CompareFn, CompareKey } from './types';
import { OptionalArray, arrayify } from '../util/array';
import { compareValues } from './compare-values';

/**
 * Creates an `Array.prototype.sort` comparator from one or more keys.
 * Keys are evaluated in order until one produces a non-zero result.
 * @example
 * const values = [{ age: 36 }, { age: 85 }];
 * values.sort(compareBy({ key: 'age' }));
 * // [{ age: 36 }, { age: 85 }]
 * @example
 * const values = [{ name: { last: 'Lovelace' } }, { name: { last: 'Hopper' } }];
 * values.sort(compareBy({ key: (value) => value.name.last, dir: 'desc' }));
 * // [{ name: { last: 'Lovelace' } }, { name: { last: 'Hopper' } }]
 * @example
 * const values = [{ group: 'a', score: 1 }, { group: 'a', score: 2 }];
 * values.sort(compareBy([{ key: 'group' }, { key: 'score', dir: 'desc' }]));
 * // [{ group: 'a', score: 2 }, { group: 'a', score: 1 }]
 * @typeParam T The type of values being sorted.
 * @param props A key definition or an ordered list of key definitions.
 * @returns A comparator for values of type `T`.
 */
export const compareBy = <T>(props: OptionalArray<CompareKey<T>>): CompareFn<T> => {
	return (a: T, b: T) => {
		let ret = 0;

		arrayify(props).some((prop) => {
			let _a;
			let _b;

			if (typeof prop.key === 'function') {
				_a = prop.key(a);
				_b = prop.key(b);
			} else {
				_a = a[prop.key];
				_b = b[prop.key];
			}

			ret = compareValues(_a, _b, prop.dir);
			return ret !== 0;
		});

		return ret;
	};
};
