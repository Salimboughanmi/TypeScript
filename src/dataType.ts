/*  *****************************************************- Data Types - Type Alias */
/* type st = string ; 
type standnum = string | number ; 
let salim : st ="steinggg" ;

let all : standnum = 10;
 all ="salim";
 all = 45 ; */

 /* **************************************************  Data Types - Type Alias Advanced */
 /* type Buttons ={
    up : string , 
    right : string,
    down :string , 
    left : string
 }

 function getActions (btns : Buttons){
    console.log(`Actions for button Up Is ${btns.up}`)
    console.log(`Actions for button Up Is ${btns.down}`)
    console.log(`Actions for button Up Is ${btns.left}`)
    console.log(`Actions for button Up Is ${btns.right}`)

 }
 getActions({ up : "Jump" , }) */


 /* **************************************************   Data Types - Literal Types */
 /*
  Data Types
  - Literal Types
*/

/* type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;
 */

/* ****************************************************** Data Types - Tuple */
/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

/* let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published); */



/* ************************************************************************* Data Types - Void And Never  */

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/


/* 
function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}

alwaysLog("Osama");
// console.log("Test"); */

/* *************************************************************** Data Types - Enums  */

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/


/* const KIDS = 15;   //before without enum 
const EASY = 9;
const MEDIUM = 6;
const HARD = 3; */
function getGardSeconds() : number{
  return 10
}

enum Kids { 
  three = 5,
  Five = 9,
  ten = 6,
}

 enum Level { 
  
  kid = Kids.three ,
  Easy = Kids.Five,
  Medium = 6,
  hard = Medium - 3 ,
  insane = getGardSeconds()  ,
  
}
let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);//9
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.kid}`); //5
}
/* =========================== - Data Types - Type Assertions */
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));


/* ========================================================- Data Types - Union And Intersection Types */

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
  one: string,
  two: number,
  three: boolean
}

type B = A & {
  four: number
}

type C = {
  five: boolean
}

type mix = A & C;

function getActions(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({ one: "String", two: 100, three: true, five: true });