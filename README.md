# Array-Like-Map
_Have your Maps and eat it, too._

Extends functionality of the map to be more like an array.


## Installation

- Install by running ```npm install --save-dev @cspruit/array-like-map``` in the same directory as the package.json file lives.

## Usage

```javascript
import {mapFilter} from '@cspruit/array-like-map';

const animals = new Map();
animals.set('dog', { isPet: true});
animals.set('tiger', { isPet: false});

const pets = mapFilter(animals, value => value.isPet);
```

### MapFilter
- Takes a map and returns a sub-map of all results that are true.

#### Example
```javascript
import {mapFilter} from '@cspruit/array-like-map';

const animals = new Map();
animals.set('dog', { name: 'Spot', isPet: true});
animals.set('dragon', { name: 'Smaug', isPet: false});

const pets = mapFilter(animals, value => value.isPet);
// Should return a map of ['dog', {isPet: true}]
```

### MapToArray
- Converts a map's values into an array

#### Example
```javascript
import {mapToArray} from '@cspruit/array-like-map';

const animals = new Map();
animals.set('dog', { name: 'Spot', isPet: true});
animals.set('dragon', { name: 'Smaug', isPet: false});

const pets = mapToArray(animals);
// Should return [{name: 'Spot', isPet: true}, {name: 'Smaug', isPet: false}]
```

### MapKeysToArray
- Converts a map's keys into an array

#### Example
```javascript
import {mapToArray} from '@cspruit/array-like-map';

const animals = new Map();
animals.set('dog', { name: 'Spot', isPet: true});
animals.set('dragon', { name: 'Smaug', isPet: false});

const pets = mapToArray(animals);
// Should return ['dog', 'dragon']
```

## Contributing
All contributions, suggestions, and issues are welcome!

Check out the [Issues](https://github.com/CassandraSpruit/Array-Like-Map/issues) page. In general anything listed is up for grabs, though bugs tend to be more detailed than enhancements and might be better to pick up if starting out.

## License
This project uses [GPL 3.0](https://github.com/CassandraSpruit/Array-Like-Map/blob/master/LICENSE).