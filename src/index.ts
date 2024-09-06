/* Statically Typed Language Like [Rust, C, C++]

- Variables Types Are Static, Once You Declare It You Cannot Change
- Type Of A Variable Is Knouwn At Compile Time "Do Type Checking At Compile-Time"
--- Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
- Error Detected Earlier

Dynamically Typed Language Like [PHP, Python, JavaScript]

- Variables Types Are Dynamic, You Can Always Change It
-"Type Checking At Execution-Time"
- Error Can Be Detected After Execution */

/* *************************Type Annotations And Any Data Type******* */

/* 
let theName :string ="salim";
let age :number =10;
let hire : boolean =true ; 
let all : any ="hhhh"
all = 100;
let n1 :string;
let n2 :string;
let allVars //any */

/* function addd (a :number , b : number ){
    return a + b
}
console.log(addd(10,20))
console.log(typeof addd(70,30)) */

/* *********************Type Annotations With Arrays**************** */

let all : (string |number |boolean )="oussema"

all = "a";
all = 40;
all = true

let myFriends = [
    "salim" , "salim" , 'sami' , "houssem" 
]
for (let i =0 ; i <myFriends.length ; i++){
  console.log(myFriends[i])
}