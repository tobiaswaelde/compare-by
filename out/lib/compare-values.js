"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValues = void 0;
const compare_booleans_1 = require("./compare-booleans");
const compare_dates_1 = require("./compare-dates");
const compare_numbers_1 = require("./compare-numbers");
const compare_strings_1 = require("./compare-strings");
const compareValues = (a, b, dir = 'asc') => {
    if (typeof a === 'string' && typeof b === 'string') {
        return (0, compare_strings_1.compareStrings)(a, b, dir);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return (0, compare_numbers_1.compareNumbers)(a, b, dir);
    }
    else if (typeof a === 'boolean' && typeof b === 'boolean') {
        return (0, compare_booleans_1.compareBooleans)(a, b, dir);
    }
    else if (a instanceof Date && b instanceof Date) {
        return (0, compare_dates_1.compareDates)(a, b, dir);
    }
    else {
        // Handle other data types or throw an error if not supported.
        throw new Error(`Unsupported data type for comparison: ${typeof a}`);
    }
};
exports.compareValues = compareValues;
//# sourceMappingURL=compare-values.js.map