"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareBy = void 0;
const array_1 = require("../util/array");
const compare_values_1 = require("./compare-values");
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
const compareBy = (props) => {
    return (a, b) => {
        let ret = 0;
        (0, array_1.arrayify)(props).some((prop) => {
            let _a;
            let _b;
            if (typeof prop.key === 'function') {
                _a = prop.key(a);
                _b = prop.key(b);
            }
            else {
                _a = a[prop.key];
                _b = b[prop.key];
            }
            ret = (0, compare_values_1.compareValues)(_a, _b, prop.dir);
            return ret !== 0;
        });
        return ret;
    };
};
exports.compareBy = compareBy;
//# sourceMappingURL=compare-by.js.map