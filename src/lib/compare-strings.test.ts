import { compareStrings } from './compare-strings';

describe('compare strings', () => {
	describe('default order', () => {
		test('same values', () => {
			expect(compareStrings('hello', 'hello')).toBe(0);
		});
		test('different casing', () => {
			expect(compareStrings('hello', 'Hello')).toBe(-1);
			expect(compareStrings('Hello', 'hello')).toBe(1);
		});
		test('different values', () => {
			expect(compareStrings('Hello', 'World')).toBe(-1);
			expect(compareStrings('Hello', 'world')).toBe(-1);
			expect(compareStrings('hello', 'World')).toBe(-1);
		});
	});

	describe('ascending order', () => {
		test('same values', () => {
			expect(compareStrings('hello', 'hello', 'asc')).toBe(0);
		});
		test('different casing', () => {
			expect(compareStrings('hello', 'Hello', 'asc')).toBe(-1);
			expect(compareStrings('Hello', 'hello', 'asc')).toBe(1);
		});
		test('different values', () => {
			expect(compareStrings('Hello', 'World', 'asc')).toBe(-1);
			expect(compareStrings('Hello', 'world', 'asc')).toBe(-1);
			expect(compareStrings('hello', 'World', 'asc')).toBe(-1);
		});
	});

	describe('descending order', () => {
		test('same values', () => {
			expect(compareStrings('hello', 'hello', 'desc')).toBe(0);
		});
		test('different casing', () => {
			expect(compareStrings('hello', 'Hello', 'desc')).toBe(1);
			expect(compareStrings('Hello', 'hello', 'desc')).toBe(-1);
		});
		test('different values', () => {
			expect(compareStrings('Hello', 'World', 'desc')).toBe(1);
			expect(compareStrings('Hello', 'world', 'desc')).toBe(1);
			expect(compareStrings('hello', 'World', 'desc')).toBe(1);
		});
	});
});
