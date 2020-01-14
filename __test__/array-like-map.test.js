import test from 'ava';
import {mapFilter, mapToArray, mapKeysToArray, mapPop, mapFind} from '../array-like-map';

let animals;
let dog;
let dragon;

test.before(() => {
	animals = new Map();
	dog = {name: 'spot', isPet: true};
	dragon = {name: 'smaug', isPet: false};
	animals.set('dog', dog);
	animals.set('dragon', dragon);
});

test('mapFilter should filter', t => {
	const pets = mapFilter(animals, value => value.isPet);

	t.is(pets.size, 1);
	t.assert(pets.get('dog'));
});

test('mapFilter should filter empty maps', t => {
	const result = mapFilter(new Map());

	t.assert(result instanceof Map);
	t.is(result.size, 0);
});

test('mapToArray should convert values in a map to an array', t => {
	const pets = mapToArray(animals, value => value.isPet);

	t.deepEqual(pets, [dog, dragon]);
});

test('mapKeysToArray should convert keys in a map to an array', t => {
	const pets = mapKeysToArray(animals, value => value.isPet);

	t.deepEqual(pets, ['dog', 'dragon']);
});

test('mapFind should return a value given a condition', t => {
	const findSpot = mapFind(animals, value => value.name === 'spot');

	t.deepEqual(findSpot, dog);
});

test('mapFind should return null if no values match a condition', t => {
	const findStrayPet = mapFind(animals, value => value.name === 'stray');

	t.falsy(findStrayPet);
});

test('mapPop should return nothing if nothing was found', t => {
	const cat = mapPop(animals, 'cat');

	t.falsy(cat);
	t.is(animals.size, 2);
});

test('mapPop should remove key and return it', t => {
	const removedDragon = mapPop(animals, 'dragon');

	t.deepEqual(removedDragon, dragon);
	t.is(animals.size, 1);
});
