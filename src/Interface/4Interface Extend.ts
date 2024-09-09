/*
  Interface
  - Extending Interfaces
*/

/* interface Myuser {
  id : number ,
  username : string , 
  country : string ,
}

interface Moderator extends Myuser {
  role : string | number
}

interface Admin extends Myuser , Moderator{
  protected? : boolean ; 
}

let person : Myuser = {
id : 6120 , 
username : "chrif",
country : 'KSA'
}

let userOnee : Admin ={
id : 4070 , 
country : 'alg',
protected : true , 
username : 'semi',
role :1
}

console.log(person)
console.log(userOnee) */