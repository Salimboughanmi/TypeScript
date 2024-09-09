/*
  Class
  - Implement Interface
*/

interface Setting{
  theme : boolean , 
  font ?: string ,
   save() : void ;
}

class Usr implements Setting{
  userN : string ; 
  constructor(public theme : boolean , username : string){
    this.userN = username
  }
  
  save(): void {
    console.log("saved");
    
  }
hello() : void{
  console.log(`hello ${this.userN}`)
}
}

let usr1 = new Usr(true , "salim")
console.log(usr1.userN)
console.log(usr1.theme)
console.log(usr1.save())
console.log(usr1.hello())