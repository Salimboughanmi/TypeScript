/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

function returnTyp<T>(val : T) :T{ 
  return(val)
  }

  console.log(returnTyp<string>("heloooooooo"));
  console.log(returnTyp<number>(16));

/* *************************************************************************************** */
const returnTypeArrowSyntax = <T>(val:T) : T => val

  console.log(returnTypeArrowSyntax<string>("test with arrow function "));
  console.log(returnTypeArrowSyntax<number>(11111));

/* *************************************************************************************** */

  function testType<T>(val : T) :string{ 
    return `the value is ${val} and his type is ${typeof val}`
    }
  
    console.log(testType<string>("heloooooooo"));
    console.log(testType<number>(16));
    console.log(testType(true));

/* *************************************************************************************** */    

function multipleType<T , S>(valOne : T ,valTwo : S ) :string  { 
  return `the first value is ${valOne} and second value is ${valTwo }`
  }

  console.log(multipleType<string , number >("heloooooooo" , 44));
  console.log(multipleType<boolean , number >(true , 4545));