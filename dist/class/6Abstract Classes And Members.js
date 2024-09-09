"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
    donate() {
        return console.log("give food");
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('cooking pizza in 1 hour ');
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('cooking burger in 2 hour ');
    }
    donate() {
        super.donate();
    }
}
let pizza1 = new Pizza("pizza Thon", 525);
let burger1 = new Burger("burgerAwsome", 5656);
console.log(pizza1.title);
console.log(pizza1.price);
burger1.donate();
//# sourceMappingURL=6Abstract%20Classes%20And%20Members.js.map