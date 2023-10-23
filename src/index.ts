import { CompareDirection, CompareFn, CompareKey } from './lib/types';

import { compareValues } from './lib/compare-values';
import { compareStrings } from './lib/compare-strings';
import { compareNumbers } from './lib/compare-numbers';
import { compareDates } from './lib/compare-dates';
import { compareBooleans } from './lib/compare-booleans';
import { compareBy } from './lib/compare-by';

// types
export { CompareDirection, CompareFn, CompareKey };

// compare functions
export { compareBooleans, compareDates, compareNumbers, compareStrings, compareValues };

// main
export default compareBy;
export { compareBy };
