/**
 * Type of the compare function.
 * @type {T} The type of the objects to compare.
 */
export type CompareFn<T> = (a: T, b: T) => number;

/**
 * The compare direction.
 */
export type CompareDirection = 'asc' | 'desc';

/**
 * The type of the compare property.
 * @type {T} The type of the object to compare.
 * @param {keyof T | ((el: T) => any)} key The object's key to compare or a value getter to the value.
 * @param {CompareDirection} dir The compare direction.
 */
export type CompareKey<T> = {
	key: keyof T | ((el: T) => any);
	dir?: CompareDirection;
};
