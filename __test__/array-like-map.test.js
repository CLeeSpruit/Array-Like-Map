import test from 'ava';
import {mapFilter, mapToArray, mapKeysToArray, mapPop} from '../array-like-map';

test('mapFilter should filter', t => {
	const animals = new Map();
	animals.set('dog', {isPet: true});
	animals.set('dragon', {isPet: false});

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
	const animals = new Map();
	const dog = {name: 'spot', isPet: true};
	const dragon = {name: 'smaug', isPet: false};
	animals.set('dog', dog);
	animals.set('dragon', dragon);

	const pets = mapToArray(animals, value => value.isPet);

	t.deepEqual(pets, [dog, dragon]);
});

test('mapKeysToArray should convert keys in a map to an array', t => {
	const animals = new Map();
	const dog = {name: 'spot', isPet: true};
	const dragon = {name: 'smaug', isPet: false};
	animals.set('dog', dog);
	animals.set('dragon', dragon);

	const pets = mapKeysToArray(animals, value => value.isPet);

	t.deepEqual(pets, ['dog', 'dragon']);
});

test('mapPop should remove key and return it', t => {
	const animals = new Map();
	const dog = {name: 'spot', isPet: true};
	const dragon = {name: 'smaug', isPet: false};
	animals.set('dog', dog);
	animals.set('dragon', dragon);

	const removedDragon = mapPop(animals, 'dragon');

	t.deepEqual(removedDragon, dragon);
	t.is(animals.size, 1);
});

test('mapPop should return nothing if nothing was found', t => {
	const animals = new Map();
	const dog = {name: 'spot', isPet: true};
	const dragon = {name: 'smaug', isPet: false};
	animals.set('dog', dog);
	animals.set('dragon', dragon);

	const cat = mapPop(animals, 'cat');

	t.falsy(cat);
	t.is(animals.size, 2);
});
