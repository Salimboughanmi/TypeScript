/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void
}

class Pizza extends Food {
  constructor( title : string , public price : number){
    super(title)
  }
  getCookingTime(): void {
    console.log('cooking pizza in 1 hour ');
  }
   
}

class Burger extends Food {
  constructor( title : string , public price : number){
    super(title)
  }
  getCookingTime(): void {
    console.log('cooking burger in 2 hour ');  }
 
}


let pizza1 = new Pizza("pizza Thon" , 525)
let burger1 = new Burger("burgerAwsome" , 5656)
console.log(pizza1.title);
console.log(pizza1.price);



