/**
 * A comparator for values of type `T`.
 * @typeParam T The type of values to compare.
 */
export type CompareFn<T> = (a: T, b: T) => number;

/**
 * The compare direction.
 */
export type CompareDirection = 'asc' | 'desc';

/**
 * A property or callback used to select a value for comparison.
 * @typeParam T The type of the object to compare.
 * @property key The object's key or a callback that returns a value to compare.
 * @property dir The comparison direction. Defaults to `asc`.
 */
export type CompareKey<T> = {
	key: keyof T | ((el: T) => unknown);
	dir?: CompareDirection;
};
