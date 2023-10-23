import { CompareDirection } from './types';

/**
 * Compare date values.
 * @param {Date} a The first value.
 * @param {Date} b The second value.
 * @param {CompareDirection} dir The direction to compare.
 * @returns {number} 0 if values are equal.
 */
export const compareDates = (a: Date, b: Date, dir: CompareDirection = 'asc') => {
	if (dir === 'asc') {
		return a.getTime() - b.getTime();
	} else {
		return b.getTime() - a.getTime();
	}
};
