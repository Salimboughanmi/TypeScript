/* 
Type annotations with fct
--noImplicitAny : 
    // "noImplicitAny": true,  Enable error reporting for expressions and declarations with an implied 'any' type. : without type
// "noImplicitReturns": true,  Enable error reporting for codepaths that do not explicitly return in a function.  missing return do false
                                 expl : dans ce cas deux return , deuxieme return n'existe pas
  "noUnusedLocals": true,              : Enable error reporting when local variables aren't read.  si local var n'utulise pas 
                                     expl : let x = 30 ;  pas utuliser
"noUnusedParameters": true,                     :  Raise an error when a function parameter isn't read. expl salary not used
*/


let showMsg = true ; 

function showdetails(name: string , age: number , salary: number) :string { // outpout annotation : fct must return string ,  return num : false
    let x = 30 ; 
    if (showMsg == true){
       return `hello ${name} , age is ${age} , salary is `;
    }
    return 'No data to return' // return lors "noImplicitReturns": true,
}
console.log(showdetails('salim' , 10 ,10 ))