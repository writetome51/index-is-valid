import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';


// index can be negative or positive.

export function indexIsValid(index, arrayLength): boolean {
	errorIfNotInteger(index);
	errorIfNotInteger(arrayLength);

	if (arrayLength < 1) throw new Error('Input must be an integer greater than zero');
	if (index < 0) index = (-index) - 1;
	return (index < arrayLength);
}