'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
// filter & map

const doubleOdds = numbers.filter(n => n % 2 !== 0).map(x => x * 2);
console.log(doubleOdds);

// reduce version (only one pass)
const redDouble = numbers.reduce((acc, n) => (n % 2 !== 0 ? [...acc, n * 2] : acc), []);
console.log(redDouble);
