var mystring;
var mynumber;
var mybool;
var myany;
/*let stringArray:string[];
let numArray:number[];
let boolArray:boolean[];


//mystring = "hello";
//mynumber = 12;
//mybool = true;
//myany = {};

let stringArray:Array<string>
let numArray:Array<number>
let boolArray:Array<boolean>

stringArray = [ "one","two","three"]
numArray = [1,2,3,4]
boolArray = [ true,false,false]
let myTuple: [ string,string,number,string]

myTuple = [ "hello","world",2,"3 ",3,3,3,"adasd"]

let myVoid:void;

myVoid = null;

let u: undefined = undefined;
let n: null = null;


console.log(n);
*/
//functions
/*function getTotal(n1:string,n2:string):string{


    return n1+" " +n2;
}

console.log(getTotal("rajith","freestyle"))*/
/*interface MyBiodata{

    title:string;
    age:string;

}



function myinterface( mydata: MyBiodata ){

    console.log(mydata.title + " is young he is  " + mydata.age  );

}


let Mybio = { title:"Rajith" ,age:21}
myinterface( Mybio )*/
//classes
var User = (function () {
    function User(name, age, socialm) {
        this.name = name;
        this.age = age;
        this.socialm = socialm;
        console.log("Hi " + this.name);
    }
    return User;
}());
var Rajith = new User("Nimal", 21, "facebook");
