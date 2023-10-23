import { CompareFn, CompareKey } from './types';
import { OptionalArray } from '../util/array';
/**
 * Returns a compare function based on the given properties.
 * @example
 * // Sort by object key
 * [{ x: 'b' }, { x: 'a' }, { x: 'c' }].sort(compareBy({ key: 'x' }))
 * // returns [ { x: 'a' }, { x: 'b' }, { x: 'c' } ]
 * @example
 * // Sort by object key with descending order
 * [{ x: 'b' }, { x: 'a' }, { x: 'c' }].sort(compareBy({ key: 'x', dir: 'desc' }))
 * // returns [ { x: 'a' }, { x: 'b' }, { x: 'c' } ]
 * @example
 * // Sort by nested object key
 * [{ x: { y: 'b' } }, { x: { y: 'a' } }].sort(compareBy({ key: (el) => el.x.y }))
 * // returns [ { x: { y: 'a' } }, { x: { y: 'b' } } ]
 * @example
 * // Sort by 'x' then by 'y'
 * [
 *   { x: 'c', y: 'c' },
 *   { x: 'b', y: 'a' },
 *   { x: 'b', y: 'b' },
 * ].sort(compareBy([{ key: 'x' }, { key: 'y' }]))
 * @type {T} The type of the array object.
 * @param {Array<CompareKey<T>>} props The properties to compare.
 * @returns {CompareFn<T>} The function to compare the values.
 */
export declare const compareBy: <T>(props: OptionalArray<CompareKey<T>>) => CompareFn<T>;
//# sourceMappingURL=compare-by.d.ts.map