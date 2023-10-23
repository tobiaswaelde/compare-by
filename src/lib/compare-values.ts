import { CompareDirection } from './types';
import { compareBooleans } from './compare-booleans';
import { compareDates } from './compare-dates';
import { compareNumbers } from './compare-numbers';
import { compareStrings } from './compare-strings';

export const compareValues = <T = string | number | Date | boolean>(
	a: T,
	b: T,
	dir: CompareDirection = 'asc'
) => {
	if (typeof a === 'string' && typeof b === 'string') {
		return compareStrings(a, b, dir);
	} else if (typeof a === 'number' && typeof b === 'number') {
		return compareNumbers(a, b, dir);
	} else if (typeof a === 'boolean' && typeof b === 'boolean') {
		return compareBooleans(a, b, dir);
	} else if (a instanceof Date && b instanceof Date) {
		return compareDates(a, b, dir);
	} else {
		// Handle other data types or throw an error if not supported.
		throw new Error(`Unsupported data type for comparison: ${typeof a}`);
	}
};
