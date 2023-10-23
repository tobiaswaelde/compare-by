export type OptionalArray<T> = T | Array<T>;

/**
 * Returns an array of the input. If the input already is an array, return the input.
 * @type {T} The type of the array values.
 * @param {T} input The input either as value or as array.
 * @returns {Array<T>} The input value as array.
 */
export const arrayify = <T>(input: OptionalArray<T>) => {
	return Array.isArray(input) ? input : [input];
};
