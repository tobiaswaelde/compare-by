import { compareDates } from './compare-dates';

describe('compare dates', () => {
	describe('default order', () => {
		test('same values', () => {
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 23))).toBe(0);
		});
		test('different values', () => {
			expect(compareDates(new Date(2023, 9, 22), new Date(2023, 9, 23))).toBeLessThan(0);
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 22))).toBeGreaterThan(0);
		});
	});

	describe('ascending order', () => {
		test('same values', () => {
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 23), 'asc')).toBe(0);
		});
		test('different values', () => {
			expect(compareDates(new Date(2023, 9, 22), new Date(2023, 9, 23), 'asc')).toBeLessThan(0);
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 22), 'asc')).toBeGreaterThan(0);
		});
	});

	describe('descending order', () => {
		test('same values', () => {
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 23), 'desc')).toBe(0);
		});
		test('different values', () => {
			expect(compareDates(new Date(2023, 9, 22), new Date(2023, 9, 23), 'desc')).toBeGreaterThan(0);
			expect(compareDates(new Date(2023, 9, 23), new Date(2023, 9, 22), 'desc')).toBeLessThan(0);
		});
	});
});
