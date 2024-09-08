/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User {
 //private username: string;          ==> on peut eliminer l'initialisation
 //protected salary: number;

  msg: () => string;
  constructor(private username: string, protected salary: number  ,public readonly id :number , adress? : string ) {
    //this.username = username;          ==> on peut eliminer l'initialisation
    //this.salary = salary;
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userone = new User("Elzero", 6000 , 6120 );

//console.log(userone.username);
//console.log(userone.salary);
console.log(userone.msg()); 
console.log(userone.sayMsg()); 


