"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareStrings = void 0;
/**
 * Compare string values.
 * @description uses `String.localCompare()`.
 * @param {string} a The first value.
 * @param {string} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
const compareStrings = (a, b, dir = 'asc') => {
    if (dir === 'asc') {
        return a.localeCompare(b);
    }
    else {
        return b.localeCompare(a);
    }
};
exports.compareStrings = compareStrings;
//# sourceMappingURL=compare-strings.js.map