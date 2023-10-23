import { CompareDirection } from './types';

/**
 * Compare string values.
 * @description uses `String.localCompare()`.
 * @param {string} a The first value.
 * @param {string} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
export const compareStrings = (a: string, b: string, dir: CompareDirection = 'asc') => {
	if (dir === 'asc') {
		return a.localeCompare(b);
	} else {
		return b.localeCompare(a);
	}
};
