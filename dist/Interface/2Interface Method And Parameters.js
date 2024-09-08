"use strict";
let user1 = {
    myid: 100,
    username: "Samii",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user1.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user1.myid);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(100));
//# sourceMappingURL=2Interface%20Method%20And%20Parameters.js.map