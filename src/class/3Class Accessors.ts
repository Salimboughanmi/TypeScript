/*
  Class
  - Get And Set Accessors
*/

/* class Myuser {
   msg: () => string;
   constructor(private myUserName: string, protected salary: number  ,public readonly myid :number , adress? : string ) {
     
     this.msg = function () {
       return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
     }
   }
   sayMsg() {
     return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
   }
   get getuserName () :string {
    return this.myUserName
   }
   set setuserName (value :string){
    this.myUserName = value
   }
 }
 
 let userTow = new Myuser("salim", 8000 , 999 );
userTow.setuserName = "ahmed"
console.log(userTow.getuserName)

console.log(userTow.msg());        // dans les deux message user sera ahmed apres getter et setter 
 console.log(userTow.sayMsg());  */    
 
 // pour generer getter et setter avec vs automaticty pas manuellement clique droit sur privet property puis refactor puis generate 'get' and 'set'accessors
 // par exemple : 

 class Myuser {
  public get myUserName(): string {
    return this._myUserName;
  }
  public set myUserName(value: string) {
    this._myUserName = value;
  }
  msg: () => string;
  constructor(private _myUserName: string, protected salary: number  ,public readonly myid :number , adress? : string ) {
    
    this.msg = function () {
      return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.myUserName} Your Salary Is ${this.salary}`;
  }
 
  
}

let userTow = new Myuser("salim", 8000 , 999 );


console.log(userTow.msg());       
console.log(userTow.sayMsg()); 