import { compareBooleans } from './compare-booleans';

describe('compare booleans', () => {
	describe('default order', () => {
		test('same values', () => {
			expect(compareBooleans(true, true)).toBe(0);
			expect(compareBooleans(false, false)).toBe(0);
		});
		test('different values', () => {
			expect(compareBooleans(true, false)).toBe(-1);
			expect(compareBooleans(false, true)).toBe(1);
		});
	});

	describe('ascendind order', () => {
		test('same values', () => {
			expect(compareBooleans(true, true, 'asc')).toBe(0);
			expect(compareBooleans(false, false, 'asc')).toBe(0);
		});
		test('different values', () => {
			expect(compareBooleans(true, false, 'asc')).toBe(-1);
			expect(compareBooleans(false, true, 'asc')).toBe(1);
		});
	});

	describe('descending order', () => {
		test('same values', () => {
			expect(compareBooleans(true, true, 'desc')).toBe(0);
			expect(compareBooleans(false, false, 'desc')).toBe(0);
		});
		test('different values', () => {
			expect(compareBooleans(true, false, 'desc')).toBe(1);
			expect(compareBooleans(false, true, 'desc')).toBe(-1);
		});
	});
});
