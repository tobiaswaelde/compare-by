"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareNumbers = void 0;
/**
 * Compare numeric values.
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
const compareNumbers = (a, b, dir = 'asc') => {
    if (dir === 'asc') {
        return a - b;
    }
    else {
        return b - a;
    }
};
exports.compareNumbers = compareNumbers;
//# sourceMappingURL=compare-numbers.js.map