"use strict";
function returnTyp(val) {
    return (val);
}
console.log(returnTyp("heloooooooo"));
console.log(returnTyp(16));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax("test with arrow function "));
console.log(returnTypeArrowSyntax(11111));
function testType(val) {
    return `the value is ${val} and his type is ${typeof val}`;
}
console.log(testType("heloooooooo"));
console.log(testType(16));
console.log(testType(true));
function multipleType(valOne, valTwo) {
    return `the first value is ${valOne} and second value is ${valTwo}`;
}
console.log(multipleType("heloooooooo", 44));
console.log(multipleType(true, 4545));
//# sourceMappingURL=9Generics%20Multiple%20Types.js.map