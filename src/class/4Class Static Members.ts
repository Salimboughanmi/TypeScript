/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class TheUser {
    static counter : number = 0 ;
    static getCount() : void  {
      console.log(`${this.counter} object created`)  
    }
    constructor(public usercounted : string){
      TheUser.counter++
    }

}

let u1 = new TheUser('salim')
let u2 = new TheUser('deede')
let u3 = new TheUser('ololo')
TheUser.getCount();  // resultat : 3 object created

