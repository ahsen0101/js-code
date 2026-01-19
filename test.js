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
console.log(typeof stringNumber);//now we check did it really change the number to string?---> yes it did👍👍👍

//----------------------------------now lets see about operations

let value = "33";
let negvalue = -value; //this will convert the string to number and then make it negative
console.log(negvalue);//-33

//some arthmetic operations
console.log(2+2);//4(number addition)
console.log(2-2);//0(number subtraction)
console.log(2*2);//4(number multiplication)
console.log(2/2);//1(number division)
console.log(2%2);//0(number modulus)
console.log(2**3);//8(number exponentiation)

//now lets see string concatenation

console.log("2"+"2");//"22"(string concatenation)
console.log("hello"+"world");//"helloworld"(string concatenation)

console.log("hello"+ 2);//"hello2"(string concatenation)(number is converted to string here)
console.log("hello"- 2);//NaN(not a number)(string cannot be converted to number here)
console.log("33"- 2);//31(both are converted to number here and then subtraction is done)
console.log("33"+ 2);//"332"(number is converted to string here and then concatenation is done)

console.log(+"33");//33(unary plus operator)(string is converted to number here)
console.log(typeof (+"33"));//number
console.log(+"hello");//NaN(unary plus operator)(string cannot be converted to number here)
console.log(typeof (+"hello"));//number(because NaN is of type number)
console.log(typeof NaN);//number

//some special case
console.log(" " + 1 + 0);//" 10"(string concatenation)
console.log("" - 1 + 0);//-1(because "" is converted to 0 and then subtraction and addition is done)
console.log(true + false);//1(because true is converted to 1 and false is converted to 0 and then addition is done)
console.log(+true);//1(because true is converted to 1)
console.log(+false);//0(because false is converted to 0)
console.log(false - true);//-1(because false is converted to 0 and true is converted to 1 and then subtraction is done)
console.log(!!"hello");//true(because "hello" is a non-empty string and !! converts it to boolean)
console.log(!!"");//false(because "" is an empty string and !! converts it to boolean)
console.log(6 / "3");//2(because "3" is converted to 3 and then division is done)
console.log("2" * "3");//6(because both strings are converted to numbers and then multiplication is done)
console.log(4 + 5 + "px");//"9px"(because 4+5 is done first and then 9 is converted to string and concatenation is done)
console.log("$" + 4 + 5);//"$45"(string concatenation)

console.log("4" - 2 + 7);//9(because "4" is converted to 4 and then subtraction and addition is done)
console.log(2 + 3 + "2");//"52"(because 2+3 is done first and then 5 is converted to string and concatenation is done)

console.log("4px" - 2);//NaN(because "4px" cannot be converted to number)
console.log(7 / 0);//Infinity
console.log(" -9 " + 5);//" -9 5"(string concatenation)
console.log(" -9 " - 5);//-14(because " -9 " is converted to -9 and then subtraction is done)
console.log(null + 1);//1(because null is converted to 0 and then addition is done)
console.log(undefined + 1);//NaN(because undefined cannot be converted to number)
console.log(" \t \n" - 2);//-2(because " \t \n" is converted to 0 and then subtraction is done)
console.log(" \t \n" + 2);//" 	\n2"(string concatenation)

letnum1,num2,num3;
num1=num2=num3=2+2;
console.log(num1,num2,num3);//4 4 4

let gamecounter=100;
gamecounter++;//++gamecounter;(prefix and postfix both work the same here)
console.log(gamecounter);//101

//---------------------------comparisons-------------------------
console.log(2==2);//true(value based comparison)
console.log(2==="2");//false(value and type based comparison)
console.log(2!="2");//false(value based comparison)
console.log(2!=="2");//true(value and type based comparison)
console.log(2>"3");//false
console.log(3>="3");//true
console.log(3<"4");//true
console.log(4<="4");//true
console.log(2<"3");//true
console.log(3<="3");//true
console.log("apple"<"banana");//true(because "a" comes before "b" in alphabet)
console.log("2"<"12");//false(because in string comparison "2" is greater than "1"
console.log("2"<2);//false(because "2" is converted to 2 and then comparison is done)
console.log(null==0);//false(because null is only equal to undefined)
console.log(null===0);//false(because type is different)

// == and <> act differently with null and undefined as <> converts null to 0.
console.log(null<=0);//true(because null is converted to 0 and then comparison is done)
console.log(null>=0);//true(because null is converted to 0 and then comparison is done)
console.log(undefined==null);//true(because undefined is only equal to null)
console.log(undefined<=null);//false(because undefined is converted to NaN and then comparison is done)
console.log(undefined<null);//false(because undefined is converted to NaN and then comparison is done)
console.log(undefined>null);//false(because undefined is converted to NaN and then comparison is done) 
console.log(undefined>=null);//false(because undefined is converted to NaN and then comparison is done)
console.log(undefined==0);//false(because undefined cannot be converted to number)
console.log(NaN==NaN);//false(because NaN is not equal to anything including itself)
console.log(Object.is(NaN, NaN));//true(because Object.is checks for same value including NaN)
console.log(NaN===NaN);//false(because NaN is not equal to anything including itself)
console.log(0===-0);//true(because both are same in type and value)
console.log(Object.is(0, -0));//false(because Object.is checks for same value including -0 and 0)
console.log(0==false);//true(because false is converted to 0 and then comparison is done)
console.log(0===false);//false(because type is different)
console.log(""==false);//true(because "" is converted to 0 and false is converted to 0 and then comparison is done)
console.log(""===false);//false(because type is different)  
console.log(" \t \n "==0);//true(because " \t \n " is converted to 0 and then comparison is done)
console.log(" \t \n "===0);//false(because type is different)   













