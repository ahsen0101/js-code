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
  















