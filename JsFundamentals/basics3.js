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



