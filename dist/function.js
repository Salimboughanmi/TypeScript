"use strict";
function addAll(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}
console.log(addAll(56, 64, 12, 385, 1));
const add = function (a, b) {
    return a + b;
};
console.log(add(8, 5));
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(87, 5));
//# sourceMappingURL=function.js.map