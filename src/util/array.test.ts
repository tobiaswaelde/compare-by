import { arrayify } from './array';

describe('util', () => {
	describe('array', () => {
		describe('arrayify', () => {
			test('non-array input', () => {
				expect(arrayify(1)).toEqual([1]);
			});
			test('array input', () => {
				expect(arrayify([1])).toEqual([1]);
				expect(arrayify([1, 2])).toEqual([1, 2]);
			});
		});
	});
});
