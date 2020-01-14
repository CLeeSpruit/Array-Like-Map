/**
 * Returns a sub-map of map filtered by filter function provided
 *
 * @export
 * @param {Map} map
 * @param {Function} filterFn
 * @returns {Map} - Sub-map of all values that return true in filterFn
 */
export function mapFilter(map, filterFn) {
	const subMap = new Map();

	map.forEach((value, key) => {
		if (filterFn(value)) {
			subMap.set(key, value);
		}
	});

	return subMap;
}

/**
 * Converts a map's values into an array.
 *
 * @export
 * @param {Map} map
 */
export function mapToArray(map) {
	return [...map.values()];
}

/**
 * Converts a map's keys into an array.
 *
 * @export
 * @param {Map} map
 */
export function mapKeysToArray(map) {
	return [...map.keys()];
}

/**
 * Removes and _returns_ the value removed from map.
 *
 * @export
 * @param {Map} map
 * @param {*} key
 * @returns
 */
export function mapPop(map, key) {
	const value = map.get(key);
	map.delete(key);
	return value;
}
