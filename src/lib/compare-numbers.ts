import { CompareDirection } from './types';

/**
 * Compare numeric values.
 * @param {number} a The first value.
 * @param {number} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
export const compareNumbers = (a: number, b: number, dir: CompareDirection = 'asc') => {
	if (dir === 'asc') {
		return a - b;
	} else {
		return b - a;
	}
};
