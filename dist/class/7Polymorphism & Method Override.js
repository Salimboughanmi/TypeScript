"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("attacking Now");
    }
}
class Amazone extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log("attacking with spearsssss");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("attacking with Axeeeee");
        this.axeDurability -= 1;
    }
}
let amzoneOne = new Amazone("amazonplayer", 10);
console.log(amzoneOne.name);
amzoneOne.attack();
console.log(amzoneOne.spears);
//# sourceMappingURL=7Polymorphism%20&%20Method%20Override.js.map