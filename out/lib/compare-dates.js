"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareDates = void 0;
/**
 * Compare date values.
 * @param {Date} a The first value.
 * @param {Date} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
const compareDates = (a, b, dir = 'asc') => {
    if (dir === 'asc') {
        return a.getTime() - b.getTime();
    }
    else {
        return b.getTime() - a.getTime();
    }
};
exports.compareDates = compareDates;
//# sourceMappingURL=compare-dates.js.map