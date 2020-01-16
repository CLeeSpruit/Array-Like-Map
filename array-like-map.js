/**
 * Returns a sub-map of map filtered by filter function provided
 *
 * @export
 * @param {Map} map
 * @param {(value) => boolean} filterFn
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
 * @returns {Array} - Resulting array from values
 */
export function mapToArray(map) {
	return [...map.values()];
}

/**
 * Converts a map's keys into an array.
 *
 * @export
 * @param {Map} map
 * @returns {Array} - Resulting array from keys
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
 * @returns {*} - value removed, if found
 */
export function mapPop(map, key) {
	const value = map.get(key);
	map.delete(key);
	return value;
}

/**
 * Searches and returns the first value that is true for the condition
 *
 * @export
 * @param {Map} map
 * @param {(value) => boolean} conditionFn
 */
export function mapFind(map, conditionFn) {
	let found = null;
	map.forEach(value => {
		if (!found && conditionFn(value)) {
			found = value;
		}
	});

	return found;
}
