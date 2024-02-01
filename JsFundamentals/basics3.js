// Array Example - 

/*
Example - One way to create an array

var marks = new Array(6);
var marks = new Array(20, 40, 35, 12, 37, 100);
*/

/* 
Example - Another way to create an array
*/
let marks = [20, 40, 35, 12, 37, 100];

/*
Example - Accessing an array element with index number
 */
console.log(marks[0]); // 20

/* 
Example - Change the value of an array element with index number
*/
marks[3] = 14;
console.log(marks); // [ 20, 40, 35, 14, 37, 100 ]

/*
Example - Accessing the length of an array
*/
console.log(marks.length); // 6

/* 
Example - Add new element to an array
*/
marks.push(200);
console.log(marks); // [ 20, 40, 35, 14, 37, 100, 200 ]

/*
Example - Remove the last element of an array
*/
marks.pop();
console.log(marks); // [ 20, 40, 35, 14, 37, 100 ]

/* 
Example - Add new element to the beginning of an array
*/
marks.unshift(12);
console.log(marks); // [ 12, 20, 40, 35, 14, 37, 100 ]

/*
Example - Show the index number of an array element
*/
console.log(marks.indexOf(35)); // 3

/*
Example - Check an element is present in an array or not
*/
console.log('ELement present in the array or not', marks.includes(35)); // true

/*
Example - to create a new array from a section of an existing array
*/
let newMarks = marks.slice(2, 5);
console.log('to create a new array from a section of an existing array', newMarks); // [ 40, 35, 14 ]

/*
Example - Print all the elements of an array
*/
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

/*
Example - To Sum up all the elements of an array
*/
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log('Sum of all the elements of an array', sum); // 258

/*
Example - reduce method in array

The reduce method in JavaScript is a powerful function used for reducing an array to a single value. 
It executes a provided function for each value of the array (from left to right) and accumulates the result. 
The reduce method is commonly used for tasks like summing all values in an array or creating 
a single aggregated object from an array of objects.

Here's the basic syntax: 
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

arr: The array to reduce.
callback: A function to execute on each element in the array (except for the first, if no initialValue is provided). It takes four arguments:
accumulator: The accumulator accumulates the callback's return values; it 
is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
currentValue: The current element being processed in the array.
index (Optional): The index of the current element being processed in the array.
array (Optional): The array reduce was called upon.
initialValue (Optional): A value to use as the first argument to the first call of the callback. 
If no initial value is supplied, the first element in the array will be used as the initial 
accumulator value and skipped as currentValue.

*/
/*
Example 1: Summing an Array of Numbers
*/
const array = [1, 2, 3, 4];
const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result); // output: 10

/*
Example 2: Creating an Object from an Array of Objects
*/
const arrayOfObjects = [{ key: 'one', value: 1 }, { key: 'two', value: 2 }];
const combinedObject = arrayOfObjects.reduce((accumulator, currentValue) => {
  accumulator[currentValue.key] = currentValue.value;
  return accumulator;
}, {});
console.log(combinedObject); // output: { one: 1, two: 2 }

/*
Example 3: Find the sum of all numbers in an array - marks
*/

const sumOfMarks = marks.reduce((sum, totalMarks) => sum + totalMarks, 0);
console.log('Sum of all the elements of an array using reduce method', sumOfMarks); // 258

/* 
Example - print even numbers in an array
*/
const scores = [12, 13, 14, 16];

const evenScores = scores.filter(score => score % 2 === 0);
console.log(evenScores); // [ 12, 14, 16 ]

/*
Example - Find the even numbers in an array and multiply them by 3
*/

const evenNumbersByThree = scores.filter(score => score % 2 === 0).map(score => score * 3);
console.log(evenNumbersByThree); // [ 36, 42, 48 ]

/*
Example - Find the even numbers in an array and multiply them by 3 after that sum them up
*/
const evenNumbersByThreeAndSum = scores.filter(score => score % 2 === 0).map(score => score * 3).reduce((sum, total) => sum + total, 0);
console.log(evenNumbersByThreeAndSum); // 126

