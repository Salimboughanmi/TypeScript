"use strict";
class Usr {
    constructor(theme, username) {
        this.theme = theme;
        this.userN = username;
    }
    save() {
        console.log("saved");
    }
    hello() {
        console.log(`hello ${this.userN}`);
    }
}
let usr1 = new Usr(true, "salim");
console.log(usr1.userN);
console.log(usr1.theme);
console.log(usr1.save());
console.log(usr1.hello());
//# sourceMappingURL=5Class%20Implement%20Interface.js.map