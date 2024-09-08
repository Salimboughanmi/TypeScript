/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id : number , 
  username : string , 
  country : string 
}

let user : User ={
  country : "tunisia",
  username : "salim",
  id :7
}
console.log(user)

function getData(data : User) {
  console.log(` the candidat ${data.username} has id number ${data.id} and living in ${data.country}`)
}

getData({id : 10 , username : "semah" , country : 'egypt'})
getData({ id :300 ,country :'krib' , username :"fedi"})