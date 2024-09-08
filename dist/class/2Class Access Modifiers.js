"use strict";
class User {
    constructor(username, salary, id, adress) {
        this.username = username;
        this.salary = salary;
        this.id = id;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userone = new User("Elzero", 6000, 6120);
console.log(userone.msg());
console.log(userone.sayMsg());
//# sourceMappingURL=2Class%20Access%20Modifiers.js.map