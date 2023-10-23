import { compareBooleans } from './compare-booleans';
import { compareDates } from './compare-dates';
import { compareNumbers } from './compare-numbers';
import { compareStrings } from './compare-strings';
import { compareValues } from './compare-values';

jest.mock('./compare-booleans', () => ({
	compareBooleans: jest.fn(),
}));
jest.mock('./compare-dates', () => ({
	compareDates: jest.fn(),
}));
jest.mock('./compare-numbers', () => ({
	compareNumbers: jest.fn(),
}));
jest.mock('./compare-strings', () => ({
	compareStrings: jest.fn(),
}));

describe('compare values', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should call compareBooleans for boolean values', () => {
		compareValues(true, false, 'asc');
		expect(compareBooleans).toHaveBeenCalledWith(true, false, 'asc');
	});

	test('should call compareDates for Date values', () => {
		const dateA = new Date('2023-01-01');
		const dateB = new Date('2023-02-01');
		compareValues(dateA, dateB, 'asc');
		expect(compareDates).toHaveBeenCalledWith(dateA, dateB, 'asc');
	});

	test('should call compareNumbers for number values', () => {
		compareValues(42, 10, 'desc');
		expect(compareNumbers).toHaveBeenCalledWith(42, 10, 'desc');
	});

	test('should call compareStrings for string values', () => {
		compareValues('apple', 'banana');
		expect(compareStrings).toHaveBeenCalledWith('apple', 'banana', 'asc');
	});

	test('should throw an error for unsupported data types', () => {
		const unsupportedDataA: any = [1, 2, 3];
		const unsupportedDataB: any = { key: 'value' };
		expect(() => compareValues(unsupportedDataA, unsupportedDataB)).toThrowError(
			'Unsupported data type for comparison'
		);
	});
});
