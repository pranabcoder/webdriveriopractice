// print Hello World Program using JS

console.log(`First Program in JS - Hello World`); // First Program in JS - Hello World

// these are comments

/*
    these are multiline comments
*/

// variables in JS

let a = 10;
console.log(`Value of a is ${a}`); // Value of a is 10
const b = 20.4;
console.log(`Value of b is ${b}`); // Value of b is 20.4
let c = "John Deo";
let required = true;

// data types in JS
console.log(`Type of variable a is ` + typeof(a)); // Type of variable a is number
console.log(`Type of variable b is ` + typeof(b)); // Type of variable b is number
console.log(`Type of variable c is ` + typeof(c)); // Type of variable c is string
console.log(`Type of variable required is ` + typeof(required)); // Type of variable required is boolean

/*
null and undefined

null - if we store null value in a variable, it will be treated as a null value
undefined - if we don't assign a value to a variable, it will be treated as undefined value

*/

/*
Example - Assignment and Operator
*/

let numberOne = 10;
let numberTwo = 20;
let sum = numberOne + numberTwo;
console.log(`Sum of ${numberOne} and ${numberTwo} is ${sum}`); // Sum of 10 and 20 is 30

/*
Difference between let and var - We cannot redeclare a variable using let keyword but possible using var keyword
*/

/*
Example - Not operator
*/

console.log(`Not operator - Negation of required is ${!required}`); // Not operator - Negation of required is false


