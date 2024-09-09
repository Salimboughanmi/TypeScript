/*
  Generics
  - Classes
*/

class Person<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne = new Person<string>("Elzero");
console.log(userOne.value);
userOne.show("Message");

let userTwo = new Person<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message");