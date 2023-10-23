import { CompareDirection } from './types';

/**
 * Compare boolean values.
 * @param {boolean} a The first value.
 * @param {boolean} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
export const compareBooleans = (a: boolean, b: boolean, dir: CompareDirection = 'asc') => {
	if (dir === 'asc') {
		if (a === b) return 0;
		return a ? -1 : 1;
	} else {
		if (b === a) return 0;
		return b ? -1 : 1;
	}
};
