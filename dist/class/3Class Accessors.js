"use strict";
class Myuser {
    get myUserName() {
        return this._myUserName;
    }
    set myUserName(value) {
        this._myUserName = value;
    }
    constructor(_myUserName, salary, myid, adress) {
        this._myUserName = _myUserName;
        this.salary = salary;
        this.myid = myid;
        this.msg = function () {
            return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
    }
}
let userTow = new Myuser("salim", 8000, 999);
console.log(userTow.msg());
console.log(userTow.sayMsg());
//# sourceMappingURL=3Class%20Accessors.js.map