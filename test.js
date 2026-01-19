console.log("This is a test file."); 
"use strict";
// alert("Hello, World!"); //we are using nodejs, not browser

//console.log(3+3); console.log("hello");// code should be readable(priority)

let name = "John";
let age = 25;
let isStudent = true;// boolean

//max  number range => 2^53 -1
//let bigInt = 1234567890123456789012345678901234567890n;

//string -->use can use it in double or single quotes but prefer double quotes

// null--> standalone value

//symbol --> unique identifier(REACT JS uses it a lot)

console.log(typeof 'hello'); //string
console.log(typeof null); //object (bug in JS)// null is an object

//-------------------------------------------conversions and operations//

//investigation study of conversions in JS

let score = 33; //we know this is a number
//const {score} = req.body;//we have no idea if this is a number or string etc

console.log(typeof score);//result is a number
console.log(typeof (score)); //result is a number

// now suppose the score was written like this score = "33"
// now the reult will be string👍👍👍

let valueinnumber = Number(score); //this will change the type of score to number(explicit conversion)
// it will change the type of the nimber but the actual value is not a number as "33abc"
// now if we put score = "33abc"(there is a string in it)
console.log(typeof valueinnumber);//this will also show the type as number but there is also a string in it and it should not show it as number only
//so now when we print this valueinnumber it will show NaN(not a number)👍👍👍
console.log(valueinnumber);//NaN

//now lets suppose the value in the score was not 33 and it was null;
//score = null; and now thr result will be 0👍👍👍(null ko 0 sy convert kr dia)

//now if the value is undefined (Nan)
//if the value is boolean(true=1,false=0)
//if the value is string("33"=33,"33abc"=NaN)(because you cannot convert a string to a number)

//keep in mind that not all datatypes can be converted

//revise
//"33"=>33
//"33abc"=>NaN
//null=>0
//undefined=>NaN
//true=>1
//false=>0



//now lets see for boolean conversions
let isloggedin = 1;//(obviously 1 is true and 0 is false)
let booleanisloggedin = Boolean(isloggedin); //explicit conversion to boolean
console.log(booleanisloggedin);//true

//what if let isloggedin = "";---> false(empty)
//what if let isloggedin = "hello";---> true
//what if let isloggedin = 123;---> true


//now lets see for string conversions
let someNumber = 33;//(converting number to string)
let stringNumber = String(someNumber); //explicit conversion to string
console.log(stringNumber);//what if someNumber = null;---> "null"
//what if someNumber = undefined;---> "undefined"
console.log(typeof stringNumber);//string
















