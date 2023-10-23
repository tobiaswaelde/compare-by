"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayify = void 0;
/**
 * Returns an array of the input. If the input already is an array, return the input.
 * @type {T} The type of the array values.
 * @param {T} input The input either as value or as array.
 * @returns {Array<T>} The input value as array.
 */
const arrayify = (input) => {
    return Array.isArray(input) ? input : [input];
};
exports.arrayify = arrayify;
//# sourceMappingURL=array.js.map