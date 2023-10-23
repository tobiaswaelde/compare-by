import { compareNumbers } from './compare-numbers';

describe('compare numbers', () => {
	describe('default order', () => {
		test('same values', () => {
			expect(compareNumbers(10, 10)).toBe(0);
		});
		test('different values', () => {
			expect(compareNumbers(10, 20)).toBeLessThan(0);
			expect(compareNumbers(20, 10)).toBeGreaterThan(0);
		});
	});

	describe('ascending order', () => {
		test('same values', () => {
			expect(compareNumbers(10, 10, 'asc')).toBe(0);
		});
		test('different values', () => {
			expect(compareNumbers(10, 20, 'asc')).toBeLessThan(0);
			expect(compareNumbers(20, 10, 'asc')).toBeGreaterThan(0);
		});
	});

	describe('descending order', () => {
		test('same values', () => {
			expect(compareNumbers(10, 10, 'desc')).toBe(0);
		});
		test('different values', () => {
			expect(compareNumbers(10, 20, 'desc')).toBeGreaterThan(0);
			expect(compareNumbers(20, 10, 'desc')).toBeLessThan(0);
		});
	});
});
