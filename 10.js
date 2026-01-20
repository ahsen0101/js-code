//-------------------memories.js-------------------//

// Stack memory(Premetive),  heap memory(non-premetive)

 // stack memory takes reference from heap memory.

 //------------------strings in JS------------------//

const name ='fantastic';
const repoCount = 50;
// console.log('name + repoCount + 'values');


 // string interpolation
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// you can also use method in it like ${name.toUpperCase()};

 //anothr way to declare string
    const anotherString = new String('fantasticooly');
    console.log(anotherString[0]);// accessing key value pair //f
    console.log(anotherString.__proto__);// shows all the methods of string

// 1. The "Ghost" Property (Primitive)
// When you try to add a property to a primitive string, 
// JavaScript doesn't throw an error (in non-strict mode). 
// Instead, it creates a temporary object, adds the property to it, 
// and then immediately deletes that object.
//The property "disappears" because the primitive itself cannot hold data; only objects can.


//so when you want to use your own properties in string you use other way to declare the string in an object.
//eg.
    console.log(anotherString.length);//11
    console.log(anotherString.toUpperCase());//FANTASTICOOLY
    console.log(anotherString.charAt(1));//a
    console.log(anotherString.indexOf('o'));//5
    console.log(anotherString.includes('ooly'));//true
    console.log(anotherString.startsWith('fan'));//true
    console.log(anotherString.endsWith('ly'));//true   
    console.log(anotherString.split('a'));//[ 'f', 'nt', 'sticooly' ] //splitting the string on the basis of a character and many othrer things too
    console.log(anotherString.replace('fantastic','amazing'));//amazingooly  //mostly used with url redirection
    console.log(anotherString.toLowerCase());//fantasticooly
    console.log(anotherString.trim());//fantasticooly  //removes extra spaces from start and end
    console.log(anotherString.valueOf());//fantasticooly
    console.log(anotherString.concat(' is a string'));//fantasticooly is a string
    console.log(anotherString.slice(0,5));//fantast   //you can also use negative values and it will start from last
    console.log(anotherString.substring(0,5));//fantast   //you cant use negative values in substring
    console.log(anotherString.repeat(3));//fantasticoolyfantasticoolyfantasticooly 
    console.log(anotherString.search('tic'));//6 // searchs the first index of tic if matched else -1.
    console.log(anotherString.match(/o/g));//[ 'o', 'o' ] // returns array of matched values based on regex
    console.log(anotherString.padStart(15,'*'));//****fantasticooly  // total length should be 15
    console.log(anotherString.padEnd(15,'*'));//fantasticooly****  // total length should be 15
    console.log(anotherString.charCodeAt(0));//102  // returns unicode value of character at given index
    console.log(anotherString.lastIndexOf('o'));//8 // returns last index of matched character
    console.log(anotherString.substr(0,5));//fantastic  // similar to slice but second parameter is length of string
    console.log(anotherString.localeCompare('fantasticooly'));//0 // returns 0 if both strings are equal else returns 1 or -1 based on unicode value
    console.log(anotherString.normalize());//fantasticooly // returns normalized string // used in unicode strings //eg. é can be represented as e + ´
    console.log(anotherString.toString());//fantasticooly  // converts string object to string primitive
    console.log(anotherString.search('z'));//-1 // searchs the first index of z if matched else -1.
    console.log(anotherString.raw`fantastic\nooly`);//fantastic\nooly // returns raw string without interpreting escape sequences
  



//-----------------------------Numbers and math-----------------------------//

const score = 100;
console.log(score);

const balance = new Number(5000);// when you only want it as a only number explicitly
console.log(balance);//[Number: 500] //it explicity tells that its a number object

console.log(balance.toString());//5000 // converts number to string
console.log(balance.toString().length);//4 // length of number when converted to string
console.log(balance.toFixed(2));//5000.00 // formats number to specified decimal places
console.log(balance.toPrecision(4));//5000 // formats number to specified length
console.log(balance.toLocaleString());//5,000 // returns number in local string format
console.log(balance.valueOf());//5000 // returns primitive value of number object
console.log(balance.isInteger(balance));//true // checks if the number is integer
console.log(balance.isNaN(NaN));//true // checks if the value is NaN
console.log(balance.parseFloat('100.50'));//100.5 // parses string to float
console.log(balance.parseInt('100abc'));//100 // parses string to integer
console.log(balance.MAX_VALUE);//1.7976931348623157e+308 // maximum representable number
console.log(balance.MIN_VALUE);//5e-324 // minimum representable number
console.log(balance.POSITIVE_INFINITY);//Infinity // represents positive infinity
console.log(balance.NEGATIVE_INFINITY);//-Infinity // represents negative infinity
console.log(balance.EPSILON);//2.220446049250313e-16 // smallest difference between two representable numbers
console.log(balance.isSafeInteger(9007199254740991));//true // checks if the number is a safe integer


// Math object  
console.log(Math.PI);//3.141592653589793 // returns value of PI
console.log(Math.abs(-5));//5 // returns absolute value //only - values become positive
console.log(Math.round(4.5));//5 // rounds number to nearest integer
console.log(Math.ceil(4.2));//5 // rounds number up to nearest integer
console.log(Math.floor(4.8));//4 // rounds number down to nearest integer

console.log(Math.random());// returns random number between 0 and 1 hamesha
console.log(Math.random()*100);// returns random number between 0 and 100 
console.log(Math.random()*100 + 1);// returns random number between 1 and 100 //1 sy to oopr chahiay hi chahiay


const min = 10;
const max = 50; 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// returns random integer between min and max (inclusive) //+1 is added to avoid 0 case.

//some extra methods of math object
console.log(Math.E);//2.718281828459045 // returns value of Euler's number  
console.log(Math.sqrt(16));//4 // returns square root of number
console.log(Math.pow(2,3));//8 // returns base to the exponent power
console.log(Math.abs(-10));//10 // returns absolute value
console.log(Math.max(10,20,5,15));//20 // returns maximum value
console.log(Math.min(10,20,5,15));//5 // returns minimum value
console.log(Math.trunc(4.9));//4 // removes decimal part and returns integer
console.log(Math.sign(-10));//-1 // returns sign of number
console.log(Math.log(10));//2.302585092994046 // returns natural logarithm of number
console.log(Math.log10(100));//2 // returns base 10 logarithm of number
console.log(Math.cbrt(27));//3 // returns cube root of number
console.log(Math.sinh(0));//0 // returns hyperbolic sine of number
console.log(Math.cosh(0));//1 // returns hyperbolic cosine of number
console.log(Math.tanh(0));//0 // returns hyperbolic tangent of number   
console.log(Math.asin(1));//1.5707963267948966 // returns arcsine of number
console.log(Math.acos(1));//0 // returns arccosine of number
console.log(Math.atan(1));//0.7853981633974483 // returns arctangent of number
console.log(Math.atan2(1,1));//0.7853981633974483 // returns arctangent of quotient of its arguments
console.log(Math.expm1(1));//1.718281828459045 // returns e^x - 1
console.log(Math.fround(1.5));//1.5 // returns nearest 32-bit single precision float representation of number
console.log(Math.imul(2,3));//6 // returns result of 32-bit integer multiplication
console.log(Math.clz32(1));//31 // returns number of leading zero bits in 32-bit integer representation
//--------------------------------------------------//---------------------------//




//---------------------Dates in JS---------------------//
//date is a global object
const date = new Date();
console.log(date);//current date and time   
console.log(date.toString());// converts date to string
console.log(date.toDateString());// converts date to readable string
console.log(date.toISOString());// converts date to ISO string
console.log(date.toLocaleDateString());// converts date to local date string
console.log(date.toLocaleTimeString());// converts date to local time string


let mycreatedate = new Date(2026, 0, 20); // year, month (0-11), day //you can also add hours, minutes, seconds, milliseconds // also DDD-MM-YYYY format is also accepted and many more formats
console.log(mycreatedate.toDateString());//Mon Jan 20 2026 ...


//extras
console.log(date.getFullYear());// gets full year
console.log(date.getMonth());// gets month (0-11)
console.log(date.getDate());// gets day of month (1-31)
console.log(date.getDay());// gets day of week (0-6)
console.log(date.getHours());// gets hours (0-23)
console.log(date.getMinutes());// gets minutes (0-59)
console.log(date.getSeconds());// gets seconds (0-59)
console.log(date.getMilliseconds());// gets milliseconds (0-999)
console.log(date.getTime());// gets time in milliseconds since Jan 1, 1970
console.log(date.setFullYear(2022));// sets full year
console.log(date.setMonth(11));// sets month (0-11)
console.log(date.setDate(25));// sets day of month (1-31)
console.log(date.setHours(10));// sets hours (0-23)
console.log(date.setMinutes(30));// sets minutes (0-59)
console.log(date.setSeconds(45));// sets seconds (0-59)
console.log(date.setMilliseconds(500));// sets milliseconds (0-999)
console.log(Date.now());// gets current time in milliseconds since Jan 1, 1970
//--------------------------------------------------//---------------------------//



//---------------------------------------array in JS---------------------//

const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits);//['apple', 'banana', 'cherry'] 
console.log(fruits.length);//3
console.log(fruits[0]);//apple
console.log(fruits.__proto__);// shows all the methods of array


const moreFruits = new Array('mango', 'papaya', 'pineapple'); // another way to declare array
const extrafruits = ['kiwi', 'grape'];

fruits.push(extrafruits); //[apple, banana, cherry, ['kiwi', 'grape']] // adds extrafruits array as a single element to fruits array
console.log(fruits[3][0]);//kiwi // accessing kiwi from nested array

const allFruits = [...fruits, ...extrafruits]; // spread operator to merge two arrays
console.log(allFruits);//['apple', 'banana', 'cherry', 'kiwi', 'grape']


//Spread: const newArr = [1, ...oldArr, 5, 6]; (Easy to add items in the middle/start).
//Concat: const newArr = oldArr.concat([5, 6]); (Items are usually just appended to the end).


//when you have an array in a array in array and you want to convert it into a single array you use flat method.
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2);// flattens the array to specified depth
console.log(flatArray);//[1, 2, 3, 4, 5, 6] // depth 2 means it will flatten 2 levels of nested arrays(you can also use Infinity to flatten all levels)

//check if its an array and then change it to an array if not
console.log(Array.isArray(fruits));//true // checks if variable is an array
console.log(Array.from('hello'));//['h', 'e', 'l', 'l', 'o'] // converts iterable or array-like object to array 
console.log(Array.of(1, 2, 3));//[1, 2, 3] // creates a new array from the given arguments  


//array methods
console.log(fruits.push('orange'));// adds element to end of array
console.log(fruits.pop());// removes element from end of array
console.log(fruits.shift());// removes element from beginning of array
console.log(fruits.unshift('grape'));// adds element to beginning of array
console.log(fruits.includes('banana'));// checks if array includes element
console.log(fruits.indexOf('cherry'));//2 // returns index of element
console.log(fruits.reverse());// reverses array
console.log(fruits.sort());// sorts array
console.log(fruits.join(', '));// joins array elements into string
console.log(fruits.slice(1,3));//['banana', 'cherry'] // returns a portion of the array
console.log(fruits.splice(1,1,'kiwi'));// removes elements from array and adds new elements

console.log(fruits.concat(['mango', 'papaya']));// merges two arrays
console.log(fruits.fill('melon',1,3));// fills array with static value from start to end index

//extras
console.log(fruits.every(fruit => fruit.length > 3));// checks if all elements pass the test
console.log(fruits.some(fruit => fruit.startsWith('a')));// checks if any element passes the test
console.log(fruits.map(fruit => fruit.toUpperCase()));// creates a new array with the results of calling a function on every element
console.log(fruits.filter(fruit => fruit.includes('e')));// creates a new array with all elements that pass the test
console.log(fruits.reduce((acc, fruit) => acc + ', ' + fruit));// reduces array to a single value by executing a reducer function on each element
console.log(fruits.find(fruit => fruit.startsWith('c')));// returns the first element that passes the test
console.log(fruits.findIndex(fruit => fruit.startsWith('b')));// returns the index of the first element that passes the test
console.log(fruits.flatMap(fruit => fruit.split('')));// maps each element using a mapping function and flattens the result into a new array
//--------------------------------------------------//---------------------------//

















