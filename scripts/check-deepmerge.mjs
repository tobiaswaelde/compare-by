import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { test } from 'node:test';

// Resolve Jest's actual transitive dependency without relying on pnpm store paths.
const projectRequire = createRequire(import.meta.url);
const jestRequire = createRequire(projectRequire.resolve('jest'));
const jestCliRequire = createRequire(jestRequire.resolve('jest-cli'));
const configRequire = createRequire(jestCliRequire.resolve('jest-config'));
const entry = configRequire.resolve('deepmerge');

for (const file of [entry, join(dirname(entry), 'umd.js')]) {
	const merge = configRequire(file);
	const format = file === entry ? 'CommonJS' : 'UMD';

	test(`${format}: own __proto__ in target cannot poison the result`, () => {
		const target = JSON.parse('{"__proto__":{"poisoned":true},"safe":1}');
		const result = merge(target, { other: 2 });
		assert.equal(Object.getPrototypeOf(result), Object.prototype);
		assert.equal(result.poisoned, undefined);
		assert.equal(Object.prototype.poisoned, undefined);
		assert.equal(result.safe, 1);
		assert.equal(result.other, 2);
		assert.deepEqual(Object.getOwnPropertyDescriptor(result, '__proto__'), {
			value: { poisoned: true }, writable: true, enumerable: true, configurable: true,
		});
		assert.equal(Object.getPrototypeOf(target), Object.prototype);
	});

	test(`${format}: null-prototype target cannot enable source poisoning`, () => {
		const source = JSON.parse('{"__proto__":{"poisoned":true},"safe":1}');
		const result = merge(Object.create(null), source);
		assert.equal(Object.getPrototypeOf(result), Object.prototype);
		assert.equal(result.poisoned, undefined);
		assert.equal(Object.prototype.poisoned, undefined);
		assert.equal(result.safe, 1);
	});

	test(`${format}: nested target cloning preserves prototypes`, () => {
		const target = JSON.parse('{"nested":{"__proto__":{"poisoned":true}}}');
		const result = merge(target, {});
		assert.equal(Object.getPrototypeOf(result.nested), Object.prototype);
		assert.equal(result.nested.poisoned, undefined);
	});

	test(`${format}: nested null-prototype targets preserve prototypes`, () => {
		const source = JSON.parse('{"nested":{"__proto__":{"poisoned":true}}}');
		const result = merge({ nested: Object.create(null) }, source);
		assert.equal(Object.getPrototypeOf(result.nested), Object.prototype);
		assert.equal(result.nested.poisoned, undefined);
	});

	test(`${format}: regular objects, arrays and symbols retain merge behavior`, () => {
		const symbol = Symbol('value');
		const target = { nested: { a: 1 }, list: [{ a: 1 }], [symbol]: 1 };
		const source = { nested: { b: 2 }, list: [{ b: 2 }], [symbol]: 2 };
		const result = merge(target, source);
		assert.deepEqual(result, {
			nested: { a: 1, b: 2 }, list: [{ a: 1 }, { b: 2 }], [symbol]: 2,
		});
		assert.notEqual(result.nested, target.nested);
		assert.notEqual(result.list[0], target.list[0]);
		assert.deepEqual(target.nested, { a: 1 });
		assert.deepEqual(source.nested, { b: 2 });
	});

	test(`${format}: all, customMerge, arrayMerge and clone options still work`, () => {
		assert.deepEqual(merge.all([{ a: 1 }, { b: 2 }]), { a: 1, b: 2 });
		const source = { nested: { a: 1 } };
		assert.equal(merge({}, source, { clone: false }).nested, source.nested);
		assert.deepEqual(merge({ list: [1] }, { list: [2] }, {
			arrayMerge: (_target, incoming) => incoming,
		}), { list: [2] });
		assert.deepEqual(merge({ nested: { a: 1 } }, { nested: { b: 2 } }, {
			customMerge: (key) => key === 'nested' ? (_target, incoming) => incoming : undefined,
		}), { nested: { b: 2 } });
	});
}
