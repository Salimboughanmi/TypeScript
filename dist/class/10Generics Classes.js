"use strict";
class Person {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userOne = new Person("Elzero");
console.log(userOne.value);
userOne.show("Message");
let userTwo = new Person(100);
console.log(userTwo.value);
userTwo.show("Message");
//# sourceMappingURL=10Generics%20Classes.js.map