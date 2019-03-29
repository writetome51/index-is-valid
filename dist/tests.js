"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
if (index_1.indexIsValid(0, 1))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
if (!(index_1.indexIsValid(1, 1)))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
if (index_1.indexIsValid(-1, 1))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
if (!(index_1.indexIsValid(-2, 1)))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
if (index_1.indexIsValid(-2, 2))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
if (index_1.indexIsValid(-1, 2))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
if (index_1.indexIsValid(0, 2))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
if (!(index_1.indexIsValid(-6, 5)))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
if (!(index_1.indexIsValid(5, 5)))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Make sure it can't modify a number variable.
var i = -2, len = 2;
index_1.indexIsValid(i, len);
if (i === -2)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
