import {errorIfNotInteger} from 'error-if-not-integer';


// index can be negative or positive.

export function indexIsValid(index, arrayLength) {
	errorIfNotIntegers([index, arrayLength]);

	if (index < 0) index = (-index) - 1;
	return (index < arrayLength);


	function errorIfNotIntegers(args) {
		for (let i = 0, len = args.length; i < len; ++i) errorIfNotInteger(args[i]);
	}
}
