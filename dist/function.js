"use strict";
/* ******************************Type Annotations With Function */
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
/* let showMsg = true ;

function showdetails(name: string , age: number , salary: number) :string { // outpout annotation : fct must return string ,  return num : false
    let x = 30 ;
    if (showMsg == true){
       return `hello ${name} , age is ${age} , salary is `;
    }
    return 'No data to return' // return lors "noImplicitReturns": true,
}
console.log(showdetails('salim' , 10 ,10 )) */
/* ********************************************** Function Optional and Default Parameters */
/* function showData(name:string ="un" , age: number , country?: string ) {
    return `${name} - ${age} - ${country}`
}
//console.log(showData("osama" , 40 )) faux !! expected 3 argument !! donc ajouter un default value en parametre expl country: string ='un' ou country?: string : optional
console.log(showData("osama" , 40 , )) */
/* ********************************************** Function Rest Parameter */
function addAll(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}
console.log(addAll(56, 64, 12, 385, 1));
/*   ********   Type Annotations With Anonymous And Arrow Function   ****************/
const add = function (a, b) {
    return a + b;
};
console.log(add(8, 5));
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(87, 5));
//# sourceMappingURL=function.js.map