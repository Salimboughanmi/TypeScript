/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride         // make it true in tsconfig.json 
  /* Ensure overriding members in derived classes are marked with an override modifier. // warning me if found overide  
  // if change name of class pere les autre dans class fils error                         
*/

class Player{
  constructor(public name: string){ }
  attack() : void{
    console.log("attacking Now"); 
  }
}

class Amazone extends Player{
  constructor(name : string , public spears : number){
    super(name)
  }
  override attack(): void {
      //super.attack()
      console.log("attacking with spearsssss")
      this.spears -=1

  }
}
                   
class Barbarian extends Player {
  constructor(name : string , public axeDurability: number  ){
    super(name)
  }
  override attack() :void{
    //super.attack()
    console.log("attacking with Axeeeee")
      this.axeDurability -=1
  }
}                                               

let amzoneOne = new Amazone("amazonplayer" , 10)
console.log(amzoneOne.name)
 amzoneOne.attack()
console.log(amzoneOne.spears)