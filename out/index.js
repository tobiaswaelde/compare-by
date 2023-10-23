"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareBy = exports.compareValues = exports.compareStrings = exports.compareNumbers = exports.compareDates = exports.compareBooleans = void 0;
const compare_values_1 = require("./lib/compare-values");
Object.defineProperty(exports, "compareValues", { enumerable: true, get: function () { return compare_values_1.compareValues; } });
const compare_strings_1 = require("./lib/compare-strings");
Object.defineProperty(exports, "compareStrings", { enumerable: true, get: function () { return compare_strings_1.compareStrings; } });
const compare_numbers_1 = require("./lib/compare-numbers");
Object.defineProperty(exports, "compareNumbers", { enumerable: true, get: function () { return compare_numbers_1.compareNumbers; } });
const compare_dates_1 = require("./lib/compare-dates");
Object.defineProperty(exports, "compareDates", { enumerable: true, get: function () { return compare_dates_1.compareDates; } });
const compare_booleans_1 = require("./lib/compare-booleans");
Object.defineProperty(exports, "compareBooleans", { enumerable: true, get: function () { return compare_booleans_1.compareBooleans; } });
const compare_by_1 = require("./lib/compare-by");
Object.defineProperty(exports, "compareBy", { enumerable: true, get: function () { return compare_by_1.compareBy; } });
// main
exports.default = compare_by_1.compareBy;
//# sourceMappingURL=index.js.map