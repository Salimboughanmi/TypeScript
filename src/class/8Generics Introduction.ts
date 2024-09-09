/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

/* function returnNumber(val : number) :number{
return(val)
}

function returnString(val : string) :string{
  return(val)
  }

  function returnBoolean(val : boolean) :boolean{
    return(val)
    }   

console.log(returnNumber(5)); */
    
function returnType<T>(val : T) :T{  // ou insteat T remplace par GenericType
  return(val)
  }

  console.log(returnType<string>("heloooooooo"));
  console.log(returnType<number>(16));
  console.log(returnType<boolean>(true));
  console.log(returnType<(number|string)[]>([1,3,6,5,65,"uu",6,5]))
  console.log(returnType<number[]>([1,3,6,5,65,6,5]))

