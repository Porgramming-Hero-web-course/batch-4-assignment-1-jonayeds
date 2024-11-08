"use strict";
const sumArray = (array) => {
    let sum = 0;
    array.map((num) => sum += num);
    return sum;
};
console.log(sumArray([1, 2, 3, 4]));
