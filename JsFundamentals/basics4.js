// Function in js

/*
Example - Add two numbers
 */
function add(a, b) {
    return a + b;
}
console.log('Output - Normal Function', add(2, 3)); // 5

/*
Example - Anonymous function
*/
let addOfNumbers = function (a, b) {
    return a + b;
};
console.log('Output - Anonymous Function', addOfNumbers(2, 3)); // 5

/*
Example - Arrow function
*/
let addOfNumbersArrow = (a, b) => {
    return a + b;
};
console.log('Output - Arrow Function', addOfNumbersArrow(2, 3)); // 5