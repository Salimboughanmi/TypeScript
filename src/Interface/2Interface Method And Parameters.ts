/*
  Interface
  - Interface Method And Parameters
*/

 interface Person {
  myid: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user1: Person = {
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
}

console.log(user1.myid);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(100)); 