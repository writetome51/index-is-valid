"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
// index can be negative or positive.
function indexIsValid(index, arrayLength) {
    errorIfNotInteger_1.errorIfNotInteger(index);
    errorIfNotInteger_1.errorIfNotInteger(arrayLength);
    if (arrayLength < 1)
        throw new Error('Input must be an integer greater than zero');
    if (index < 0)
        index = (-index) - 1;
    return (index < arrayLength);
}
exports.indexIsValid = indexIsValid;
