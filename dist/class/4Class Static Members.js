"use strict";
class TheUser {
    static getCount() {
        console.log(`${this.counter} object created`);
    }
    constructor(usercounted) {
        this.usercounted = usercounted;
        TheUser.counter++;
    }
}
TheUser.counter = 0;
let u1 = new TheUser('salim');
let u2 = new TheUser('deede');
let u3 = new TheUser('ololo');
TheUser.getCount();
//# sourceMappingURL=4Class%20Static%20Members.js.map