import {errorIfNotInteger} from 'error-if-not-integer';


// index can be negative or positive.

export function indexIsValid(index, arrayLength) {

	errorIfNotInteger(index);
	errorIfNotInteger(arrayLength);
	if (arrayLength < 1) throw new Error('Input must be an integer greater than zero');

	if (index < 0) index = (-index) - 1;
	return (index < arrayLength);
}
