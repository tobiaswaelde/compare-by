import { compareBy } from './compare-by';

describe('compare by', () => {
	describe('sort by key', () => {
		test('ascending order', () => {
			const arr = [{ x: 'b' }, { x: 'a' }, { x: 'c' }];
			const sortedArr = [{ x: 'a' }, { x: 'b' }, { x: 'c' }];

			arr.sort(compareBy({ key: 'x' }));
			expect(arr).toEqual(sortedArr);
		});

		test('descending order', () => {
			const arr = [{ x: 'b' }, { x: 'a' }, { x: 'c' }];
			const sortedArr = [{ x: 'c' }, { x: 'b' }, { x: 'a' }];

			arr.sort(compareBy({ key: 'x', dir: 'desc' }));
			expect(arr).toEqual(sortedArr);
		});
	});

	describe('sort by nested key', () => {
		test('ascending order', () => {
			const arr = [{ x: { y: 'b' } }, { x: { y: 'a' } }];
			const sortedArr = [{ x: { y: 'a' } }, { x: { y: 'b' } }];

			arr.sort(compareBy({ key: (el) => el.x.y }));
			expect(arr).toEqual(sortedArr);
		});

		test('descending order', () => {
			const arr = [{ x: { y: 'a' } }, { x: { y: 'b' } }];
			const sortedArr = [{ x: { y: 'b' } }, { x: { y: 'a' } }];

			arr.sort(compareBy({ key: (el) => el.x.y, dir: 'desc' }));
			expect(arr).toEqual(sortedArr);
		});
	});

	describe('sort by multiple keys', () => {
		test('ascending,ascending order', () => {
			const arr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
			];
			const sortedArr = [
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
				{ x: 'c', y: 'c' },
			];

			arr.sort(compareBy([{ key: 'x' }, { key: 'y' }]));
			expect(arr).toEqual(sortedArr);
		});
		test('ascending,descending order', () => {
			const arr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
			];
			const sortedArr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
			];

			arr.sort(compareBy([{ key: 'x', dir: 'desc' }, { key: 'y' }]));
			expect(arr).toEqual(sortedArr);
		});
		test('descending,ascending order', () => {
			const arr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
			];
			const sortedArr = [
				{ x: 'b', y: 'b' },
				{ x: 'b', y: 'a' },
				{ x: 'c', y: 'c' },
			];

			arr.sort(compareBy([{ key: 'x' }, { key: 'y', dir: 'desc' }]));
			expect(arr).toEqual(sortedArr);
		});
		test('descending,descending order', () => {
			const arr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'a' },
				{ x: 'b', y: 'b' },
			];
			const sortedArr = [
				{ x: 'c', y: 'c' },
				{ x: 'b', y: 'b' },
				{ x: 'b', y: 'a' },
			];

			arr.sort(
				compareBy([
					{ key: 'x', dir: 'desc' },
					{ key: 'y', dir: 'desc' },
				])
			);
			expect(arr).toEqual(sortedArr);
		});
	});
});
