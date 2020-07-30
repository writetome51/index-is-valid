# indexIsValid(index, arrayLength): boolean

Returns true or false based on whether or not `index` can exist in `arrayLength`.  
`index` can be negative or positive.

## Examples
```
indexIsValid(1, 1); // --> false

indexIsValid(-1, 1); // --> true

indexIsValid(1, 2); // --> true

indexIsValid(-2, 2); // --> true

indexIsValid(-3, 2); // --> false

indexIsValid(1, 0); // console: "Error:  Input must be an integer greater than zero"
```

## Installation
`npm i  @writetome51/index-is-valid`

## Loading
```js
import { indexIsValid } from '@writetome51/index-is-valid';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
