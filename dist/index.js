"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
// index can be negative or positive.
function indexIsValid(index, arrayLength) {
    error_if_not_integer_1.errorIfNotInteger(index);
    error_if_not_integer_1.errorIfNotInteger(arrayLength);
    if (arrayLength < 1)
        throw new Error('Input must be an integer greater than zero');
    if (index < 0)
        index = (-index) - 1;
    return (index < arrayLength);
}
exports.indexIsValid = indexIsValid;
